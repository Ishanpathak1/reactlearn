import "./style.css";
import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            <ThisWorks />
        </div>

    );
}

function ThisWorks() {
    const [myNumber,setMyNumber]=useState(0);

    function increment() {
        setMyNumber(myNumber+1);
    }
    return (
        <div>
            <p>{myNumber}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}