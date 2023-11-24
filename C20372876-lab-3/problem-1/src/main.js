const nContainer = document.getElementById("note-app");
const addNoteBtn = nContainer.querySelector(".add-note");
const saveNoteBtn = nContainer.querySelector(".save-note");

// Get notes
getNotes().forEach((notes) => {

    const nElement = createNoteElement(notes.id, notes.content, notes.color);
    nContainer.insertBefore(nElement, addNoteBtn); // insert note before add button

}); // End of getNotes

// Observable for add-note button
// const addBtnClick$ = rxjs.fromEvent(addNoteBtn, "click");
// const saveBtnClick$ = rxjs.fromEvent(saveNoteBtn, "click");

// // Add new note when clicked using rxjs
// addBtnClick$.subscribe(() => addNote());
// saveBtnClick$.subscribe(() => updateNote());


// ======== START OF FUNCTIONS ==========

function getNotes() {
    /* Retrieve notes locally */
    return JSON.parse(localStorage.getItem("notetaking-notes") || "[]"); // Get notes stored locally, if no notes, array will be empty
}

function saveNotes(notes) {
    /* Save notes locally */
    localStorage.setItem("notetaking-notes", JSON.stringify(notes)); // Get existing notes locally and add new objects into existing array and save it locally.
}

function createNoteElement(id, content, color){
    /* Build new HTML element representating a note */
    const element = document.createElement("textarea"); // js representation of an html element

    element.classList.add("notes");
    element.value = content;
    element.placeholder = "Empty";
    element.style.backgroundColor = color;

    
    const elementDoubleClick$ = rxjs.fromEvent(element, "dblclick");
    
    const saveBtnClick$ = rxjs.fromEvent(saveNoteBtn, "click");

  
    // update note when changed using rxjs

    saveBtnClick$.subscribe(() => updateNote(id, element.value));
    //saveNoteBtn.addEventListener("click", () => updateNote(id, element.value));

    elementDoubleClick$.subscribe(() => {
        const dlt = confirm("Confirm if you'd like to delete Note");

        if(dlt){
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote() {
    /* Add new Note */

    const notes = getNotes();
    const nObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
        color: ""
    };

    const nElement = createNoteElement(nObject.id, nObject.content, nObject.color);
    nContainer.insertBefore(nElement, addNoteBtn); 

    nObject.color = (nElement.style.backgroundColor = event.target.style.backgroundColor);
    //nElement.style.backgroundColor = event.target.style.backgroundColor;

    notes.push(nObject); // re-save it locally
    saveNotes(notes);
}

function updateNote(id, newContent) {
    /* Update existing Note */
    const unotes = getNotes();
    // find target note
    const tNote = unotes.filter(notes => notes.id == id)[0]; // gives array of single element

    tNote.content = newContent;
    saveNotes(unotes);
}

function deleteNote(id, element) {
    /* Delete a note */
    const dnotes = getNotes().filter((notes) => notes.id != id);

    saveNotes(dnotes);
    nContainer.removeChild(element);
}

 
//}); // End of Dom



