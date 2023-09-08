import PokemonCard from "../PokemonCard";
import "./PokemonGrid.scss";

import React from "react";

function PokemonGrid({ pokemon }) {
  if (!pokemon) return null;
  return (
    <div className="pokemon-grid">
      {pokemon.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;
