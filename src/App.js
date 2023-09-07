import { memo } from "react";

import "./App.scss";
import { Footer, Header } from "./components";
import PokemonGrid from "./components/PokemonGrid";
import usePokemon from "./hooks/usePokemon";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function Error() {
  return <h2>🌀 Error...</h2>;
}

const App = memo(() => {
  const { pokemon, isLoading, error, getPokemonImage } = usePokemon({});
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="App">
      <Header />
      <main>
        <PokemonGrid pokemon={pokemon} getPokemonImage={getPokemonImage}/>
      </main>
      <Footer />
    </div>
  );
});

export default App;
