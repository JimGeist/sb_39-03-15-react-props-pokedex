import React from "react";

import "./static/Pokemon.css";

const Pokemon = ({ id, name, type, base_experience }) => {

    const pokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    return (
        <>

            <img className="pokemon-img" src={`${pokemonImg}${id}.png`} alt={`${name}.png`} />
            <p className="pokemon-type-exp">Type: <strong>{type}</strong><br></br>
                EXP: <strong>{base_experience}</strong></p>

        </>
    )

}

export default Pokemon;
