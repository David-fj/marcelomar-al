import React from "react";

export function Button({ onClick }){

    return(
<>
        <div>
            <button onClick={onClick}>Clique aqui!</button>
        </div>
</>
    );
}