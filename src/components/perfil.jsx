import React, {useState ,useEffect} from "react";
import "./perfil.css"

function Perfil({ value })
{
    const [dados, setDados] = useState([]);
    const meses = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let ano = '';
    let mes = '';
    let dia = '';
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
    //console.log(dados.bio);
    for(let i = 0; i < 10; i++)
    {
        if(i < 4)
            ano += dados.created_at[i];
        else if(i > 4 && i < 7)
            mes += dados.created_at[i];
        else if(i > 7)
            dia += dados.created_at[i];
    }
    return(
        <>
            <div className="containerPerfil">
                <img src={dados.avatar_url} className="imagemPerfil" />
                <div className="containerMain">
                <div className="headerPerfil">
                    <div className="header">
                    <div>
                        <div className="name">{dados.name}</div>
                        <div className="login">@{dados.login}</div>
                    </div>
                    <div className="joined">Joined {dia} {meses[parseInt(mes)-1]} {ano}</div>
                    </div>
                    <div className="bio">{dados.bio ? dados.bio : "This profile has no bio"}</div>
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
                        <a href={dados.blog} target="_blank"><div>{dados.blog}</div></a>
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