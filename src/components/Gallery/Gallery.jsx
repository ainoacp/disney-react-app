import React from "react";
import Card from '../Card/Card'

export default function Gallery({characters}) {
    return (
        <div className="gallery">
            <ul>
                {characters.map((character) => 
                    <Card character={character} key={character._id}/>)}
            </ul>
        </div>
    ) 
}