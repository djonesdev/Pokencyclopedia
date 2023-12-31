import React, { useState } from "react";
import "./DropdownSelector.scss";

export default function DropdownSelector({ options, setSelectedOption, placeholder }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder);

  const setOption = (option) => {
    setIsSelected(option);
    setIsActive(!isActive);
    if (setSelectedOption) {
        setSelectedOption(option)
    }
  }

  return (
      <div className="dropdown">
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected.label}
        </div>
        <div
          className="dropdown-content"
          data-testid="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          {options.map((option) => (
            <div
              onClick={() => {
                setOption(option)
              }}
              className="item"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
  );
}