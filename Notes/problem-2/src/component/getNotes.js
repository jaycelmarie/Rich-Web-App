function getNotes() {
    /* Retrieve notes locally */
    return JSON.parse(localStorage.getItem("notetaking-notes") || "[]"); // Get notes stored locally, if no notes, array will be empty
}
