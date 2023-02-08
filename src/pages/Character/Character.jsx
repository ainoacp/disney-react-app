import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Character.scss"

export default function Character() {

    let { id } = useParams();

    const [character, setCharacter] = useState([]);
    
    const getCharacter = async () => {
        const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`);
        console.log(res.data);
        setCharacter(res.data);
    }
    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div className="c-character-page">
            <div className="ch-main">
                <div className="ch-img-section">
                    <img alt="img" src={character?.imageUrl}/>
                    <h4>{character.name}</h4>
                </div>
                <div className="ch-info-section">
                    <div className="ch-info-container">
                        <h5>ALLIES</h5>
                        {character?.allies?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>ENEMIES</h5>
                            {character?.enemies?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>FILMS</h5>
                        {character?.films?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>PARK ATTRACTIONS</h5>
                        {character?.parkAttractions?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>SHORT FILMS</h5>
                        {character?.shortFilms?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>TV SHOWS</h5>
                        {character?.tvShows?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                    <div className="ch-info-container">
                        <h5>VIDEO GAMES</h5>
                        {character?.videoGames?.map((item,index) => (<p key={index}>{item}</p>))}
                    </div>
                </div>
            </div>
        </div>
    )
}