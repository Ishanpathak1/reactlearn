import "./style.css";
import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            <StateWithInput />
        
        </div>
    );
}
function StateWithInput() {
    const [myName, setMyName]=useState("");

    function handleOnChange(text) {
        setMyNAme(text);
    }
    return (
        <div>
        <input type="text" onChange={(e)=>handleOnChange(e.target.value)} />
        <p>Hello, {myName}!</p>
        </div>
        
    );
}