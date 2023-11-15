function createNoteElement(id, content, color){
    /* Build new HTML element representating a note */
    const element = document.createElement("textarea"); // js representation of an html element

    element.classList.add("notes");
    element.value = content;
    element.placeholder = "Empty";
    element.style.backgroundColor = color;

    return element;
}
