import React, {useState} from 'react';

export const Buscar = () => 
{
    const [valorInput, setValorInput] = useState('');

    const handleChange = (event) => 
    {
        setValorInput(event.target.value);
    };

    return(
        <>        
            <div>
      <label htmlFor="meuInput">Digite algo: </label>
      <input
        id="meuInput"
        type="text"
        value={valorInput} // O valor do input é controlado pelo estado
        onChange={handleChange} // Atualiza o estado sempre que o valor do input mudar
      />
      <p>O valor do input é: {valorInput}</p>
    </div>
        </>
    )
}


export const useValue = () =>
{
    return
}