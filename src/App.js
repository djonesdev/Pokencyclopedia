import { memo, useEffect } from "react";

import "./App.scss";
import './_utilities.scss'
import { Footer, Header, PokemonGrid, PokemonFilters } from "./components";
import usePokemon from "./hooks/usePokemon";

const App = memo(() => {
  const { pokemon, isLoading, loadMore, hasMorePokemonToLoad } =
    usePokemon({});
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    loadMore();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="App">
      <Header />
      <PokemonFilters />
      <main>
        <PokemonGrid
          pokemon={pokemon}
          loadMore={loadMore}
          hasMorePokemonToLoad={hasMorePokemonToLoad}
        />
      </main>
      <Footer />
    </div>
  );
});

export default App;
