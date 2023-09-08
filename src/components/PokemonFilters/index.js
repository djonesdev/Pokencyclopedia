import React from "react";

import "../../_utilities.scss";
import "./PokemonFilters.scss";

import DropdownSelector from "../DropdownSelector";

function PokemonFilters({ setGeneration, setRegion }) {
  const generationOptions = [
    { label: "Generation 1", value: 1 },
    { label: "Generation 2", value: 2 },
    { label: "Generation 3", value: 3 },
    { label: "Generation 4", value: 4 },
    { label: "Generation 5", value: 5 },
    { label: "Generation 6", value: 6 },
    { label: "Generation 7", value: 7 },
    { label: "Generation 8", value: 8 },
    { label: "Generation 9", value: 9 },
  ];

  const regionOptions = [
    { label: "Kanto", value: "Kanto" },
    { label: "Johto", value: "Johto" },
    { label: "Hoenn", value: "Hoenn" },
    { label: "Sinnoh", value: "Sinnoh" },
    { label: "Hisui", value: "Hisui" },
    { label: "Unova", value: "Unova" },
    { label: "Kalos", value: "Kalos" },
    { label: "Alola", value: "Alola" },
    { label: "Galar", value: "Galar" },
    { label: "Paldea", value: "Paldea" },
  ];

  return (
    <section className="d-flex justify-space-evenly selector-container">
      <div>
        <DropdownSelector
          options={generationOptions}
          placeholder={{ label: "Select A Generation" }}
          setSelectedOption={setGeneration}
        />
      </div>
      <div>
        <DropdownSelector
          options={regionOptions}
          placeholder={{ label: "Select A Region" }}
          setSelectedOption={setRegion}
        />
      </div>
    </section>
  );
}

export default PokemonFilters;
