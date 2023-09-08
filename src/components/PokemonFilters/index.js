import React from "react";
import "../../_utilities.scss";
import DropdownSelector from "../DropdownSelector";

function PokemonFilters() {
  const mockOptions = [
    { label: "option 1", value: 2 },
    { label: "option 2", value: 2 },
  ];
  return (
    <section className="d-flex justify-space-evenly">
      <div>
        <DropdownSelector
          options={mockOptions}
          setSelectedOption={(option) => console.log(option)}
        />
      </div>
      <div>
        <DropdownSelector
          options={mockOptions}
          setSelectedOption={(option) => console.log(option)}
        />
      </div>
    </section>
  );
}

export default PokemonFilters;
