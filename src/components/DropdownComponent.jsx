import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const DropdownComponent = ({ options, placeholder, updateState }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    const option = options.find((option) => option.value === eventKey);
    setSelectedOption(option);
    updateState(option.label);
  };

  return (
    <>
      <div>{placeholder}</div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption ? selectedOption.label : "--Select--"}
        onSelect={handleSelect}
      >
        {options.map((option) => (
          <Dropdown.Item key={option.value} eventKey={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default DropdownComponent;
