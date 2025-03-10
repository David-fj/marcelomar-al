import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Perfil from './components/perfil'
import { Buscar } from './components/busca'
import { Button} from './components/button'
import TrocaCor from './components/trocaCor';
import './App.css'

function App() {

  const [valorInput, setValorInput] = useState('');
  const [perfil, setPerfil] = useState('Octocat');
  const [busca, setBusca] = useState(true);
  const [cor, setCor] = useState(true);

  async function search(value)
        {
          try {
            const response = await fetch(`https://api.github.com/users/${value}`)
            if(!response.ok)
            {
              throw new Error('Não achou nada na API')
            }
            const data = await response.json();
            setBusca(true);
            return data;
          } catch(error) {
            setBusca(false);
            console.error(error);
            return 0;
          }
        }

  const handleChange = (event) => 
  {
    setValorInput(event.target.value);
  };

  const clickChange = () =>
  {
    setPerfil(valorInput);
  };

  const corChange = () =>
  {
    if(cor)
      setCor(false);
    else
      setCor(true);
  };

  return (
    <div className={cor? "AppContainer" : "AppContainer darkBack"}>
      <header>
        <h1 className={cor? "": "darkText"} >devfinder</h1>
        <TrocaCor corChange={corChange} cor={cor}/>
      </header>
      <div className={cor?"containerSearch" : "darkBack2 containerSearch"}>
        <div>
        <img src="./public/Combined Shape.svg" alt="" />
        <Buscar value={valorInput} onChange={handleChange} cor={cor}/>
        </div>
        <div>
          <span className={busca ? "results" : "noResults"}>No results</span>
          <Button onClick={clickChange}/>
        </div>
      </div>
      <Perfil value={perfil} busca={search} cor={cor}/>
    </div>
  )
}

export default App
