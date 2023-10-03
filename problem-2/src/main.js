const nContainer = document.getElementById("note-app");
const addNoteBtn = nContainer.querySelector(".add-note");
const saveNoteBtn = nContainer.querySelector(".save-note");

getNotes().forEach((notes) => {
    const nElement = createNoteElement(notes.id, notes.content);
    nContainer.insertBefore(nElement, addNoteBtn); // insert note before add button
});

addNoteBtn.addEventListener("click", () => addNote());
saveNoteBtn.addEventListener("click", () => updateNote());


function getNotes() {
    /* Retrieve notes locally */
    return JSON.parse(localStorage.getItem("notetaking-notes") || "[]"); // Get notes stored locally, if no notes, array will be empty
}

function saveNotes(notes) {
    /* Save notes locally */
    localStorage.setItem("notetaking-notes", JSON.stringify(notes)); // Get existing notes locally and add new objects into existing array and save it locally.
}

function createNoteElement(id, content){
    /* Build new HTML element representating a note */
    const element = document.createElement("textarea"); // js representation of an html element

    element.classList.add("notes");
    element.value = content;
    element.placeholder = "Empty";

    //  element.addEventListener("change", () => {
    //    updateNote(id, element.value);
    //  });

    saveNoteBtn.addEventListener("click", () => updateNote(id, element.value));

    element.addEventListener("dblclick", () => {
        const dlt = confirm("Confirm if you'd like to delete Note");

        if (dlt) {
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
        content: ""
    };

    const nElement = createNoteElement(nObject.id, nObject.content);
    nContainer.insertBefore(nElement, addNoteBtn); 

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

