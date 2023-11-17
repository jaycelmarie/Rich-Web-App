function updateNote(id, newContent) {
    /* Update existing Note */
    const unotes = getNotes();
    // find target note
    const tNote = unotes.filter(notes => notes.id == id)[0]; // gives array of single element

    tNote.content = newContent;
    saveNotes(unotes);
}
