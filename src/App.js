import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './PokemonChars';

import './static/App.css';

function App() {

  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />

    </div>
  );
}

export default App;
