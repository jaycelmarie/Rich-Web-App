import React, { useState } from "react";
import '../main.css';

function Login() {
    const [username, setUsername] = useState("");
    return(
        <>
            <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input type="text" placeholder="Password"/>
            <button>
               
                LOGIN
            </button>

        </>
    );
}

export default Login;