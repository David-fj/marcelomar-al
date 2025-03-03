import React, {useState ,useEffect} from "react";

function Perfil({ value })
{
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        async function search()
        {
            const response = await fetch(`https://api.github.com/users/${value}`)
            const data = await response.json();
            setDados(data);
            //console.log(data);
        }

        search();
    }, [value]);

    //if(!dados.name) return console.log("Carregando...");
    if(!dados.login) return <>Carregando...</>;
    //console.log(dados);
    
    return(
        <>
            <div>{dados.name}</div>
            <img src={dados.avatar_url} alt="" />
        </>
    );
}

export default Perfil;