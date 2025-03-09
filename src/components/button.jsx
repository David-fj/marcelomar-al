import React from "react";
import "./button.css";

export function Button({ onClick}){

    return(
<>
        <div>
            <button onClick={onClick}>Search</button>
        </div>
</>
    );
}