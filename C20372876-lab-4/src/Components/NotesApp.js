import React, { useState, useEffect } from 'react';
import '../main.css';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    // Load notes from local storage 
    const savedNotes = localStorage.getItem('notetaking-notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const addNote = (color) => {
    const newNote = {
      id: Math.floor(Math.random() * 100000),
      content: '',
      color: color,
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      saveNotesToLocal(updatedNotes);
      return updatedNotes;
    });
  };

  const updateNote = (id, newContent) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      );
      saveNotesToLocal(updatedNotes);
      return updatedNotes;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      saveNotesToLocal(updatedNotes);
      return updatedNotes;
    });
  };

  const saveNotesToLocal = (updatedNotes) => {
    localStorage.setItem('notetaking-notes', JSON.stringify(updatedNotes));
  };

  return (
    <div id="note-app">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          content={note.content}
          color={note.color}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
      {/* Save button */}
      <button className="save-note" type="button">
        <img className="save-btn" src="save-btn.png" alt="Save" />
      </button>
      {/* Colours for notes */}
      <div
        className="add-note"
        onClick={() => addNote('#1E90FF')}
        style={{ backgroundColor: '#1E90FF' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#5F9EA0')}
        style={{ backgroundColor: '#5F9EA0' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#F0E68C')}
        style={{ backgroundColor: '#F0E68C' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#F0E68C')}
        style={{ backgroundColor: '#F0E68C' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#ADFF2F')}
        style={{ backgroundColor: '#ADFF2F' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#DC143C')}
        style={{ backgroundColor: '#DC143C' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#EE82EE')}
        style={{ backgroundColor: '#EE82EE' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#8A2BE2')}
        style={{ backgroundColor: '#8A2BE2' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#2F4F4F')}
        style={{ backgroundColor: '#2F4F4F' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#696969')}
        style={{ backgroundColor: '#696969' }}
      >
        +
      </div>
      <div
        className="add-note"
        onClick={() => addNote('#D3D3D3')}
        style={{ backgroundColor: '#D3D3D3' }}
      >
        +
      </div>
    </div>
  );
} // End of App

const Note = ({ id, content, color, updateNote, deleteNote }) => {
  const [noteContent, setNoteContent] = useState(content);

  const handleDoubleClick = () => {
    const shouldDelete = window.confirm("Confirm if you'd like to delete Note");

    if (shouldDelete) {
      deleteNote(id);
    }
  };

  return (
    <textarea
      className="notes"
      value={noteContent}
      placeholder="Empty"
      style={{ backgroundColor: color }}
      onChange={(e) => setNoteContent(e.target.value)}
      onBlur={() => updateNote(id, noteContent)}
      onDoubleClick={handleDoubleClick}
    />
  );
};

export default NotesApp;
