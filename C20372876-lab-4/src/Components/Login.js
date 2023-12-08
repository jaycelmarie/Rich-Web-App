import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import '../main.css';

function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext);

    return(
        <>
            <label for="uname"><b>Username</b></label>
            <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Password"/>
            <button id="loginbtn" onClick={() => {setShowProfile(true)}}>
            LOGIN
            </button>
        </>
    );
}

export default Login;