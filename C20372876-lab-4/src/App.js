import React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';
import NotesApp from "./Components/NotesApp";
import Login from "./Components/Login";
import './main.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <NotesApp /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
    
}

export default App;
