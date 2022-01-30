import { AutocomplItem } from "../autocomplItem/autocomplItem";
import { useSelector } from "react-redux";
import { Autocomplete } from "./autocomplete.styled";


export const Autocompletelist = ({ showAutocomplete, itemClick }) => {
  const autocomplArr = useSelector((state) => state.weather.autocomplete);

  if (showAutocomplete) {
    return (
      
      <Autocomplete>
      <div>
        {autocomplArr.map((item) => (
          <AutocomplItem
            key={item.weight}
            id={item.weight}
            name={item.name}
            coord={item.coordinates}
            itemClick={itemClick}
          />
        ))}
        </div>
      </Autocomplete>
      
    );
  }
  return null;
};
