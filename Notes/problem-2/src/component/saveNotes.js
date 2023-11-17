
function saveNotes(notes) {
    /* Save notes locally */
    localStorage.setItem("notetaking-notes", JSON.stringify(notes)); // Get existing notes locally and add new objects into existing array and save it locally.
}
