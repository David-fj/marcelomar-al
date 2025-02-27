import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Perfil from './components/perfil'
import { Buscar } from './components/busca'
import { Button} from './components/button'
import './App.css'


function App() {

  const [valorInput, setValorInput] = useState('');

  const handleChange = (event) => 
    {
        setValorInput(event.target.value);
    };

    const clickChange = () =>
    {
      console.log("Entrou no onClick");
        return(
          <>
            <Perfil value={valorInput}/>
          </>
        );
    }

  return (
    <>
      <h1>DevFinder</h1>
      <Buscar value={valorInput} onChange={handleChange}/>
      <Button onClick={clickChange}/>
    </>
  )
}

export default App
