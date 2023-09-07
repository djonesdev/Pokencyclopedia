import { useState, useEffect } from "react";

import pokemonApi from "../api/pokemon";

export default function usePokemon(params) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const getPokemonImage = (pokemon) => {
    if (pokemon && pokemon.url) {
      const pokedexNumber = pokemon?.url.slice(-3).replace("/", "");
      return {
        ...pokemon,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexNumber.replace("/", "")}.png`,
      };
    }
  };
  const callApi = async (params) => {
    setIsLoading(true);
    try {
      const response = await pokemonApi.getPokemon(params);
      const pokemonWithImage = response.data.results.map((pokemon) => {
        return getPokemonImage(pokemon)
      })
      setPokemon(pokemonWithImage);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!pokemon && !isLoading) {
      callApi(params);
    }
  }, []);

  const loadMore = () => {
    callApi(params);
  };


  return {
    pokemon,
    loadMore,
    isLoading,
    error,
    getPokemonImage,
  };
}
