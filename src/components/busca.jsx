import React from 'react';
import './busca.css';

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
        placeholder='Search GitHub username...'
      />
    </div>
        </>
    )
}