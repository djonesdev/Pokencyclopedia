import { memo, useEffect, useState } from "react";

import "./App.scss";
import "./_utilities.scss";
import { Footer, Header, PokemonGrid, PokemonFilters } from "./components";
import usePokemon from "./hooks/usePokemon";

const App = memo(() => {
  const [generation, setGeneration] = useState(null);
  const [region, setRegion] = useState(null);

  const { pokemon, isLoading, loadMore, hasMorePokemonToLoad } = usePokemon({});

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

  console.log(region, 'region')
  console.log(generation, 'generation')

  return (
    <div className="App">
      <Header />
      <PokemonFilters setGeneration={setGeneration} setRegion={setRegion} />
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
