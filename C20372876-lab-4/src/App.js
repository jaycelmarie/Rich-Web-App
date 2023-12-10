import React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotesApp from "./Components/NotesApp";
import Login from "./Components/Login";
import HomeLogin from "./Components/HomeLogin";
import Index from "./Components/Index";
import './main.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  
  // Return values to be displayed 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/HomeLogin" element={<HomeLogin backTo="/"/>} />
      {/* <Route path="/Login" element={<Login backTo="/"/>} />
      <Route path="/NotesApp" element={<NotesApp backTo="/"/>} /> */}
      </Routes>
    </Router>
  );
    
} // End of App

export default App;
