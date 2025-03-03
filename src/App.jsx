import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Perfil from './components/perfil'
import { Buscar } from './components/busca'
import { Button} from './components/button'
import './App.css'


function App() {

  const [valorInput, setValorInput] = useState('');
  const [perfil, setPerfil] = useState('Octocat');
  const handleChange = (event) => 
  {
        setValorInput(event.target.value);
  };

  const clickChange = () =>
  {
    setPerfil(valorInput);
  };

  return (
    <>
      <header>
        <h1>DevFinder</h1>
        <div>
          <img src="./public/moon.svg" alt="" />
          <span>DARK</span>
        </div>
      </header>

      <Buscar value={valorInput} onChange={handleChange}/>
      <Button onClick={clickChange}/>
      <Perfil value={perfil}/>
    </>
  )
}

export default App
