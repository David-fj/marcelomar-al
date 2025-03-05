import React from 'react';

export function Buscar ({value, onChange}) 
{
    return(
        <>        
            <div>
      <input
        id="meuInput"
        type="text"
        onChange={onChange}
        value={value}
        placeholder='Search GitHub username'
      />
    </div>
        </>
    )
}