import React from 'react';

export function Buscar ({value, onChange}) 
{
    return(
        <>        
            <div>
        <label htmlFor="meuInput">Digite algo: </label>
      <input
        id="meuInput"
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
        </>
    )
}