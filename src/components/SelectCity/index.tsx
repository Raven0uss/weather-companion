import { City } from "../../api";
import { CityElement, CityListContainer } from "./SelectCity.styled";

interface SelectCityProps {
  cityList: Array<City>;
  onSelectCity: (value: City) => void;
}

const SelectCity: React.FC<SelectCityProps> = ({ cityList, onSelectCity }) => {
  return (
    <CityListContainer data-testid="city-list-container">
      {cityList.map((element, index) => (
        <CityElement
          key={`${element.name}-${index}`}
          onClick={() => onSelectCity(element)}
          data-testid="city-element"
        >
          <span className="city-name-from-list">{element.name}</span>(
          {element.country}
          {"state" in element && ` - ${element.state}`})
        </CityElement>
      ))}
    </CityListContainer>
  );
};

export default SelectCity;
