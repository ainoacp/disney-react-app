import { Link } from "react-router-dom";
import React from "react";
import './Card.scss'

export default function Card({character}) {
    return (
        <Link to={`/characters/${character._id}`} key={character._id} className="character">
            <h4>{character.name}</h4>
            <img src={character.imageUrl} alt={character.name} />  
        </Link>
    )
}