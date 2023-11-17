document.addEventListener('DomContentLoaded', function() {
    const { fromEvent} = rxjs;

    const nContainer = document.getElementById("note-app");
    const addNoteBtn = nContainer.querySelector(".add-note");
    const saveNoteBtn = nContainer.querySelector(".save-note");

    // Get notes
    getNotes().forEach((notes) => {
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

    // function addNote() {
    //     /* Add new Note */
    //     const notes = getNotes();
    //     const nObject = {
    //         id: Math.floor(Math.random() * 100000),
    //         content: ""
    //     };
    //     const nElement = createNoteElement(nObject.id, nObject.content);
    
    //     // nObject.color = (nElement.style.backgroundColor = event.target.style.backgroundColor);
    //     //nElement.style.backgroundColor = event.target.style.backgroundColor;
    
    //     nElement.nObject = nObject;
        
    //     nContainer.insertBefore(nElement, addNoteBtn); 
    
    //     notes.push(nObject); // re-save it locally
    //     saveNotes(notes);
    // }

    // function getNotes() {
    //     /* Retrieve notes locally */
    //     return JSON.parse(localStorage.getItem("notetaking-notes") || "[]"); // Get notes stored locally, if no notes, array will be empty
    // }    

    // function saveNotes(notes) {
    //     /* Save notes locally */
    //     localStorage.setItem("notetaking-notes", JSON.stringify(notes)); // Get existing notes locally and add new objects into existing array and save it locally.
    // }

    
    // function addNote() {
    //     /* Add new Note */
    //     const notes = getNotes();
    //     const nObject = {
    //         id: Math.floor(Math.random() * 100000),
    //         content: ""
    //     };
    //     const nElement = createNoteElement(nObject.id, nObject.content);
    
    //     // nObject.color = (nElement.style.backgroundColor = event.target.style.backgroundColor);
    //     //nElement.style.backgroundColor = event.target.style.backgroundColor;
        
    //     nContainer.insertBefore(nElement, addNoteBtn); 
    
    //     notes.push(nObject); // re-save it locally
    //     saveNotes(notes);
    // }
    

    // function createNoteElement(id, content){
    //     /* Build new HTML element representating a note */
    //     const element = document.createElement("textarea"); // js representation of an html element
    
    //     element.classList.add("notes");
    //     element.value = content;
    //     element.placeholder = "Empty";
    
    //     return element;
    // }
    
    // function updateNote(id, newContent) {
    //     /* Update existing Note */
    //     const unotes = getNotes();
    //     // find target note
    //     const tNote = unotes.filter(notes => notes.id == id)[0]; // gives array of single element
    
    //     tNote.content = newContent;
    //     saveNotes(unotes);
    // }   


    // function deleteNote(id, element) {
    //     /* Delete a note */
    //     const nContainer = document.getElementById("app");
    //     const dnotes = getNotes().filter((notes) => notes.id != id);
    
    //     saveNotes(dnotes);
    //     nContainer.removeChild(element);
    // }


 
}); // End of Dom



