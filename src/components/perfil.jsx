import React, {useState ,useEffect} from "react";
import "./perfil.css"

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
    console.log(dados);
    return(
        <>
            <div className="containerPerfil">
                <img src={dados.avatar_url} className="imagemPerfil" />
                <div>
                <div className="headerPerfil">
                    
                    <div>
                        <div>{dados.name}</div>
                        <div>@{dados.login}</div>
                    </div>
                    <div>{dados.bio}</div>
                    <div>{dados.created_at}</div>
                </div>
                <div className="containerInfo">
                    <div>
                        <span>Repos</span>
                        <div>{dados.public_repos}</div>
                    </div>

                    <div>
                        <span>Followers</span>
                        <div>{dados.followers}</div>
                    </div>
                    <div>
                        <span>Following</span>
                        <div>{dados.following}</div>
                    </div>
                </div>

                <div className="containerLinks">
                    <div>
                        <img src="./public/003-pin.svg" alt="" />
                        <div>{dados.location}</div>
                    </div>
                    <div>
                        <img src="./public/004-twitter.svg" alt="" />
                        <div>{dados.twitter_username ? dados.twitter_username : "Not Available"}</div>
                    </div>
                    <div>
                        <img src="./public/002-url.svg" alt="" />
                        <div>{dados.blog}</div>
                    </div>
                    <div>
                        <img src="./public/001-office-building.svg" alt="" />
                        <div>{dados.company}</div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;