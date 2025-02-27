import React from "react";

export function Button({ clickChange }){

    console.log("Butão");
    return(
<>
        <div>
            <button type="button" onClick={clickChange}>Clique aqui!</button>
        </div>
</>
    );
}