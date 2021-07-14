import React from "react";

import "./static/PokemonCard.css";

const PokemonCard = ({ title, children }) => {

    return (
        <div className="pokemon-card" >

            <h1 className="pokemon-card-title" >{title}</h1>
            {children}

        </div>
    )

}

export default PokemonCard;
