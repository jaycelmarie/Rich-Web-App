import React, { useState, useEffect } from 'react';
import './main.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from local storage on component mount
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
      <button className="save-note" type="button">
        <img className="save-btn" src="save-btn.png" alt="Save" />
      </button>

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
      
    </div>
  );
}

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

export default App;
