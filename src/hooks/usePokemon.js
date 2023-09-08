import { useState, useEffect } from "react";

import pokemonApi, { apiConfig } from "../api/pokemon";

export default function usePokemon(params) {
  const [pokemon, setPokemon] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPokemonImage = (pokemon) => {
    if (pokemon && pokemon.url) {
      const pokedexNumber = pokemon.url
        .replace(`${apiConfig.baseUrl}/pokemon`, "")
        .replaceAll("/", "");

      return {
        ...pokemon,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexNumber.replace(
          "/",
          ""
        )}.png`,
        pokedexNumber,
      };
    }
  };

  const callApi = async (params) => {
    setIsLoading(true);
    try {
      const response = await pokemonApi.getPokemon(params);

      const pokemonWithImages = response.data.results.map((pokemon) => {
        return getPokemonImage(pokemon);
      });

      console.log(pokemonWithImages, 'pokemonWithImages')

      if (pokemon) {
        const newState = [...pokemon, ...pokemonWithImages];
        setPokemon(newState);
      } else {
        setPokemon(pokemonWithImages);
      }

      setNextUrl(response.data.next);
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
    callApi({ url: nextUrl });
  };

  return {
    pokemon,
    loadMore,
    isLoading,
    error,
    getPokemonImage,
  };
}
