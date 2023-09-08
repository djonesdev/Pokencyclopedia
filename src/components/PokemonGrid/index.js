import PokemonCard from "../PokemonCard";
import "./PokemonGrid.scss";

import React from "react";

function PokemonGrid({ pokemon, loadMore }) {

  const onClickLoadMore = (event) => {
    console.log(event)
    loadMore()
    return false
  }
  if (!pokemon) return null;
  return (
    <>
      <div className="pokemon-grid">
        {pokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
      <div className="pokemon-grid__load-more-container">
        <button onClick={onClickLoadMore} className="pokemon-grid__load-more-button">
          Load More Pokmon
        </button>
      </div>
    </>
  );
}

export default PokemonGrid;
