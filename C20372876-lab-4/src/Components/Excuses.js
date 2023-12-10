import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import Axios from 'axios';

export const Excuses = ({ backTo }) =>  {
    const [excuse, setExcuse] = useState("");

    // Excuses API
    const excuseCat = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
            .then((res) => {
                setExcuse(res.data[0].excuse); 
            }); 
    };// End of excuseCat

    return(
        <>
            <button onClick={() => excuseCat("college")}>College</button>
            <button onClick={() => excuseCat("gaming")}>Gaming</button>
            <button onClick={() => excuseCat("family")}>Family</button>
            <button onClick={() => excuseCat("party")}>Party</button>
            <button onClick={() => excuseCat("funny")}>Funny</button>

            <p> Excuse: {excuse} </p>

            <button id ="loginAndFactbtn">
                <Link to={backTo}>Back to Homepage</Link>
            </button>
        </>
    );
}

export default Excuses;