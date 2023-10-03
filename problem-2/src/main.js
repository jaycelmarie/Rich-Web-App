const nContainer = document.getElementById("note-app");
const addNoteBtn = nContainer.querySelector(".add-note");

getNotes().forEach((notes) => {
    const nElement = createNoteElement(notes.id, notes.content);
    nContainer.insertBefore(nElement, addNoteBtn); // insert note before add button
});

addNoteBtn.addEventListener("click", () => addNote());

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

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

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
    const localNotes = getNotes();
    const nObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const nElement = createNoteElement(nObject.id, nObject.content);
    nContainer.insertBefore(nElement, addNoteBtn); 

    notes.push(nObject); // re-save it locally
    saveNotes(localNotes);
}

function updateNote(id, newContent) {
    /* Update existing Note */
    console.log("Updating Note..");
    console.log(id, newContent);
}

function deleteNote(id, element) {
    /* Delete a note */
    console.log("Deleting Note..");
    console.log(id);

}