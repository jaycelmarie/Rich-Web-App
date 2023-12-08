import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import '../main.css';

function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext);

    return(
        <>
            <div className="container">
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <label for="uname"><b>Username</b></label>
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </div> 
                </div>
                <div className="inputs">
                    <div className="input">
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <button id="loginbtn" onClick={() => {setShowProfile(true)}}>
                        LOGIN
                </button>
            </div>
        </>
    );
}

export default Login;