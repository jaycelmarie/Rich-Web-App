import React, { useState } from 'react';
import './main.css';
import NotesApp from "./Components/NotesApp";
import Login from "./Components/Login";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <div className="App">
    {showProfile ? <NotesApp /> : <Login />}
    </div>
  );
    
}

export default App;
