import React from "react";
import "./trocaCor.css"

function TrocaCor( {corChange, cor} )
{
    if(cor)
        return (
<>
<div className="containerTrocaCor" onClick={corChange}>
          <img src="./public/moon (1).svg" alt="" />
          <span>DARK</span>
        </div>
</>

    );
    else
    return (
<>
<div className="containerTrocaCor" onClick={corChange}>
          <img src="./public/002-sun.svg" alt="" />
          <span>LIGHT</span>
        </div>
</>
    );
}

export default TrocaCor;