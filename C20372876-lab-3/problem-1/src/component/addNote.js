function addNote() {
    /* Add new Note */
    const nContainer = document.getElementById("note-app");
    const addNoteBtn = nContainer.querySelector(".add-note");

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