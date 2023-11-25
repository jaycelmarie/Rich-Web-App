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

      deleteNote() {
        this.parentSubject.next(); // Notify parent to delete this note from its children

        // Recursively delete all child notes
        this.children.forEach(child => child.deleteNote());
      }
    } // End NoteList

    const notes = []; // Array to store created notes

    window.createNote = function() {
      const contentInput = document.getElementById('content');
      const parentSelect = document.getElementById('parentNote');
      const content = contentInput.value;
      const parentId = parentSelect.value;

      if (content) {
        let parentNote;

        if (parentId) {
          parentNote = notes.find(note => note.id === parseInt(parentId));
        }

        const newNote = new NoteList(Date.now(), content);

        if (parentNote) {
          parentNote.addChild(newNote);
        } else {
          notes.push(newNote);
        }

        // Clear the input fields
        contentInput.value = '';


      }
    }; // End createNote()
});