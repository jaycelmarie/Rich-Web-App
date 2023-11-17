function deleteNote(id, element) {
    /* Delete a note */
    const nContainer = document.getElementById("app");
    const dnotes = getNotes().filter((notes) => notes.id != id);

    saveNotes(dnotes);
    nContainer.removeChild(element);
}
