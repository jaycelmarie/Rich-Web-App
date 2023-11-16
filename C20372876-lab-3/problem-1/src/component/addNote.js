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

    nObject.color = (nElement.style.backgroundColor = event.target.style.backgroundColor);
    //nElement.style.backgroundColor = event.target.style.backgroundColor;

    nElement.nObject = nObject;
    
    nContainer.insertBefore(nElement, addNoteBtn); 

    notes.push(nObject); // re-save it locally
    saveNotes(notes);
}