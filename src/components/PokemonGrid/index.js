import "./PokemonGrid.scss";

import React from "react";

function PokemonGrid({ pokemon }) {
  console.log(pokemon)
  if (!pokemon) return null;
  return (
    <div className="pokemon-grid">
      {pokemon.map((pokemon) => (
        <div key={pokemon.name}>
          <img loading="lazy" alt={pokemon.name} style={{height: 50, width: 50}} src={pokemon.imageUrl}/>
          <p>{pokemon.name} </p>
        </div>
      ))}
    </div>
  );
}

export default PokemonGrid;
