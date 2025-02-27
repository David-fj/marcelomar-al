import React from 'react';

export function Buscar ({valueInput, handleChange}) 
{
    return(
        <>        
            <div>
        <label htmlFor="meuInput">Digite algo: </label>
      <input
        id="meuInput"
        type="text"
        onChange={handleChange}
        value={valueInput}
      />
    </div>
        </>
    )
}