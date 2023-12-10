import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLogin from "./Components/HomeLogin";
import Index from "./Components/Index";
import Excuses from "./Components/Excuses";
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
      <Route path="/Excuses" element={<Excuses backTo="/"/>} />
      </Routes>
    </Router>
  );
    
} // End of App

export default App;
