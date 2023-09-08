import React, { memo } from "react";

import "./PokemonCard.scss";

const PokemonCard = memo(({ pokemon, getPokemonData }) => {
  const { name, imageUrl, pokedexNumber } = pokemon;
  return (
    <button onClick={getPokemonData} className="pokemon-card">
      <div className="pokemon-card__image-container">
        <img
          className="pokemon-card__image"
          loading="lazy"
          alt={name}
          src={imageUrl}
        />
      </div>
      <p className="pokemon-card__name">
        <span className="pokemon-card__pokedex-number">{`#${pokedexNumber} `}</span>
        {name}
      </p>
    </button>
  );
});

export default PokemonCard;
