document.addEventListener('DomContentLoaded', function() {
    const { fromEvent} = rxjs;

    const nContainer = document.getElementById("note-app");
    const addNoteBtn = nContainer.querySelector(".add-note");
    const saveNoteBtn = nContainer.querySelector(".save-note");

    // Get notes
    getNotes().forEach((notes) => {
    
        console.log("Enter GetNotes");
        const nElement = createNoteElement(notes.id, notes.content);
        nElement.nObject = notes;
        nContainer.insertBefore(nElement, addNoteBtn); // insert note before add button
    
    }); // End of getNotes

    // Add New Note
    const add$ = fromEvent(addNoteBtn, 'click');
    add$.subscribe(() => {
        addNote();
    });

    // add$.pipe(
    //     map(() => ({
    //         text: notes.value.trim()
    //     })),

    //     filter(notes => notes.text !== ""),

    //     tap(notes => {
    //         addNote(notes.text);
    //         notes.value = "";
    //         saveNotes();
    //     })
    // ).subscribe();

    // Save Note
    const save$ = fromEvent(saveNoteBtn, 'click');
    save$.subscribe(() => {
        updateNote();
    });

    // Update Note
    const update$ = fromEvent(nContainer, 'input').pipe(
        map((event) => {
            const note_id = event.target.nObject.id;
            const val = event.target.value;

            return{
                id: note_id,
                value: val
            };
        })
    );
    update$.subscribe(({id, value}) => {
        updateNote(id, value);
    });

    // Delete Note
    const del$ = fromEvent(nContainer, 'dblclick');
    del$.subscribe((event) => {
        const nElement = event.target;
        const id = nElement.nObject.id;
        const confirm = confirm("Please Confirm you'd like to delete note");

        if(confirm) {
            deleteNote(id, nElement);
        }
    });

 
}); // End of Dom



