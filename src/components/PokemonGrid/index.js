import PokemonCard from "../PokemonCard";
import "./PokemonGrid.scss";

import React, { memo } from "react";

const PokemonGrid = memo(({ pokemon }) => {
  if (!pokemon) return null;

  // const loadMorePokemon = (e) => {
  //   e.preventDefault();
  //   loadMore();
  // };

  return (
    <>
      <div className="pokemon-grid">
        {pokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.pokedexNumber} />
        ))}
      </div>
      {/* <div className="pokemon-grid__load-more-container">
        {hasMorePokemonToLoad && (
          <button
            onClick={loadMorePokemon}
            className="pokemon-grid__load-more-button"
          >
            Load More Pokmon
          </button>
        )}
      </div> */}
    </>
  );
});

export default PokemonGrid;
