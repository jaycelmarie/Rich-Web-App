document.addEventListener("DOMContentLoaded", function() {
    const { Subject } = rxjs;

    class NoteList {
      constructor(id, content) {
        this.id = id;
        this.content = content;
        this.children = [];
        this.parentSubject = new Subject();
      }

      addChild(childNote) {
        this.children.push(childNote);
      }

      setParent(parentNote) {
        this.parentSubject.next(parentNote);
      }

      deleteNote(childId) {
        const childIndex = this.children.findIndex(child => child.id === childId);
        if (childIndex !== -1) {
          // Unsubscribe from the child's parentSubject
          this.children[childIndex].parentSubject.unsubscribe();
          this.children.splice(childIndex, 1);
        }
      }
    } // End NoteList

    const notes = []; // Array to store created notes

    // window. is a transformation operator that periodically subdivides
    // the items from an Observable into a window and emit the windows 
    // rather than emitting the items one at a time
    window.createNote = function() {
      const contentInput = document.getElementById('content');
      const parentSelect = document.getElementById('parentNote');
      const content = contentInput.value;
      const parentId = parentSelect.value;

      if (content) {
        let parentNote;

        if (parentId) {
          parentNote = notes.find(note => note.id === parseInt(parentId));
        } // end if

        const newNote = new NoteList(Date.now(), content);

        if (parentNote) {
          parentNote.addChild(newNote);
        } else {
          notes.push(newNote);
        } // end if

        // Clear the input fields
        contentInput.value = '';

        // Clear and repopulate the parentNote dropdown with existing notes
        parentSelect.innerHTML = '<option value="">None</option>';
        optionChoice();

      } // End if
    }; // End createNote()

    // optionChoice - adds parent note onto options so child can choose a parent
    function optionChoice() {
        const parentSelect = document.getElementById('parentNote');
  
        notes.forEach(note => {
          const option = document.createElement('option');
          option.value = note.id;
          option.textContent = note.content;
          parentSelect.appendChild(option);
        });

        displayParent();
    } // End of optionChoice

    // Display Parent Note 
    function displayParent() {
        const notesList = document.getElementById('parentList');
        notesList.innerHTML = '';
  
        notes.forEach(note => {
          const listItem = document.createElement('li');
          listItem.textContent = note.content;
  
          // Create delete button for parent notes
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = function() {
            deleteNote(note.id);
          };
          listItem.appendChild(deleteButton);
  
          // Display children
          if (note.children.length > 0) {
            const childList = document.createElement('ul');
            displayChild(note.children, childList);
            listItem.appendChild(childList);
          }
  
          notesList.appendChild(listItem);
        });
      } // End of displayParent

    // Display child notes
    function displayChild(children, parentElement) {
        children.forEach(child => {
        const listItem = document.createElement('li');
        listItem.textContent = child.content;

        if (child.children.length > 0) {
            // Display child notes recursively
            const childList = document.createElement('ul');
            displayChild(child.children, childList);
            listItem.appendChild(childList);
        }

        parentElement.appendChild(listItem);
        });
    } // end displayChild

    // Delete parent note and its children
    function deleteNote(noteId) {
        const noteToDelete = notes.find(note => note.id === noteId);

        if (noteToDelete) {
            const index = notes.indexOf(noteToDelete);
            if (index !== -1) {
                // Unsubscribe from the parent's subject
                notes[index].parentSubject.unsubscribe();
                notes.splice(index, 1);
                // edit dropdown to remove the parent thats been removed in list
                const parentSelect = document.getElementById('parentNote');
                parentSelect.innerHTML = '<option value="">None</option>';
                optionChoice();
            } // End of inner if
        } // End of outer if
    } // End of deleteNote
});