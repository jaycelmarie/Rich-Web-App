import React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';
import NotesApp from "./Components/NotesApp";
import Login from "./Components/Login";
import './main.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  
  // Return values to be displayed 
  return (
    <div className="App">
      {/* if showprofile is true, go notesapp, otherwise go login page */}
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <NotesApp /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
    
} // End of App

export default App;
