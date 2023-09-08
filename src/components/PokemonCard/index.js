import React from 'react';

import "./PokemonCard.scss";

function PokemonCard({ pokemon, getPokemonData }) {
  const { name, imageUrl } = pokemon;
  return (
    <button onClick={getPokemonData} className="pokemon-card" key={name}>
      <div className="pokemon-card__image-container">
        <img
          className="pokemon-card__image"
          loading="lazy"
          alt={name}
          src={imageUrl}
        />
      </div>
      <p className="pokemon-card__name">{name} </p>
    </button>
  );
}

export default PokemonCard;
