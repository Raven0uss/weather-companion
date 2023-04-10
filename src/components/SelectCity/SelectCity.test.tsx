import { render, fireEvent } from "@testing-library/react";
import SelectCity from "./index";
import { City } from "../../api";

describe("SelectCity", () => {
  const mockCityList: City[] = [
    {
      name: "London",
      country: "GB",
      lat: 0,
      lon: 0,
    },
    {
      name: "Paris",
      country: "FR",
      state: "Ile-de-France",
      lat: 0,
      lon: 0,
    },
    {
      name: "New York",
      country: "US",
      state: "NY",
      lat: 0,
      lon: 0,
    },
  ];

  it("renders the list of cities", () => {
    const { getAllByTestId } = render(
      <SelectCity cityList={mockCityList} onSelectCity={jest.fn()} />
    );
    const cityElements = getAllByTestId("city-element");
    expect(cityElements.length).toBe(mockCityList.length);
  });

  it("calls onSelectCity with the selected city", () => {
    const mockOnSelectCity = jest.fn();
    const { getAllByTestId } = render(
      <SelectCity cityList={mockCityList} onSelectCity={mockOnSelectCity} />
    );
    const cityElements = getAllByTestId("city-element");
    fireEvent.click(cityElements[0]);
    expect(mockOnSelectCity).toHaveBeenCalledWith(mockCityList[0]);
  });
});
