document.addEventListener('DomContentLoaded', () => {
    const { fromEvent, interval, takeUntil, switchMap, tap } = rxjs;

    const nContainer = document.getElementById("note-app");
    const addNoteBtn = nContainer.querySelector(".add-note");
    const saveNoteBtn = nContainer.querySelector(".save-note");

    // Add New Note
    const add$ = fromEvent(addNoteBtn, 'click');
    add$.subscribe(() => addNote());

    // Save Note
    const save$ = fromEvent(saveNoteBtn, 'click');
    save$.subscribe(() => updateNote());

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

    // Get notes
    getNotes().forEach((notes) => {
        const nElement = createNoteElement(notes.id, notes.content, notes.color);
        nElement.nObject = notes;
        nContainer.insertBefore(nElement, addNoteBtn); // insert note before add button
    }); // End of getNotes

}); // End of Dom



