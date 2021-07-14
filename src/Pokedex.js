import React from "react";
import Pokemon from "./Pokemon";
import PokemonCard from "./PokemonCard";

// import "./Pokedex.css";

const Pokedex = ({ pokemons }) => {

    return (
        <div>
            <h1>Pokedex</h1>
            {
                pokemons.map(pokemon => (
                    <PokemonCard title={pokemon.name} >
                        <Pokemon id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />
                    </PokemonCard>
                ))
            }
        </div>
    )

}

export default Pokedex;
