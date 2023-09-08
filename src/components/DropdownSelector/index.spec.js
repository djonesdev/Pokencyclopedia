import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropdownSelector from "./";
import { wait } from "@testing-library/user-event/dist/utils";

describe("DropdownSelector", () => {
  test("renders the DropdownSelector component without errors", () => {
    render(<DropdownSelector options={[]} />);
  });

  test("displays the default label initially", () => {
    const { getByText } = render(<DropdownSelector options={[]} />);
    const defaultLabel = getByText("Choose one");
    expect(defaultLabel).toBeInTheDocument();
  });

  test("toggles the dropdown when the button is clicked", () => {
    const { getByText, getByTestId } = render(
      <DropdownSelector options={[]} />
    );
    const button = getByText("Choose one");
    const dropdownContent = getByTestId("dropdown-content");

    expect(dropdownContent).toHaveStyle("display: none");

    // Click the button to open the dropdown
    fireEvent.click(button);
    expect(dropdownContent).toHaveStyle("display: block");

    // Click the button again to close the dropdown
    fireEvent.click(button);
    expect(dropdownContent).toHaveStyle("display: none");
  });

  test("renders and selects options", () => {
    const options = [
      { label: "Option 1" },
      { label: "Option 2" },
      { label: "Option 3" },
    ];

    const { getByText, getByTestId } = render(
      <DropdownSelector options={options} />
    );
    const button = getByText("Choose one");
    const dropdownContent = getByTestId("dropdown-content");

    // Click the button to open the dropdown
    fireEvent.click(button);
    expect(dropdownContent).toHaveStyle("display: block");

    // Click an option
    const option2 = getByText("Option 2");
    fireEvent.click(option2);

    // Verify that the selected option is displayed in the button
    expect(button).toHaveTextContent("Option 2");

    // Verify that the dropdown is closed
    expect(dropdownContent).toHaveStyle("display: none");
  });

  test("calls setSelectedOption when an option is selected", () => {
    const options = [{ label: "Option 1" }, { label: "Option 2" }];
    const setSelectedOption = jest.fn();

    const { getByText } = render(
      <DropdownSelector
        options={options}
        setSelectedOption={setSelectedOption}
      />
    );

    const button = getByText("Choose one");

    // Click an option
    const option1 = getByText("Option 1");
    fireEvent.click(option1);

    // Verify that setSelectedOption was called with the selected option
    expect(setSelectedOption).toHaveBeenCalledWith({ label: "Option 1" });
  });
});
