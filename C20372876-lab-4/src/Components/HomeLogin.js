import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext';
import NotesApp from "./NotesApp";
import Login from "./Login";
import '../main.css';

export const Home = ({ backTo }) => {
    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState("");

    return(
      <>
        <div className="App">
          {/* if showprofile is true, go notesapp, otherwise go login page */}
          <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
            {showProfile ? <NotesApp /> : <Login />}
          </LoginContext.Provider>
        </div>

        <button id ="loginAndFactbtn">
          <Link to={backTo}>Back to Homepage</Link>
        </button>
      </>  
    );
}

export default Home;