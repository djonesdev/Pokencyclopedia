import React, { memo } from 'react';

import "./PokemonCard.scss";

const PokemonCard = ({ pokemon, getPokemonData }) => {
  const { name, imageUrl, pokedexNumber } = pokemon;
  if(name === "voltorb") console.log(pokemon)
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
      <p className="pokemon-card__name"><span className='pokemon-card__pokedex-number'>{`#${pokedexNumber} `}</span>{name} </p>
    </button>
  );
}

export default PokemonCard;
