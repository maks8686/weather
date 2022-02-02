import { useState } from "react";
import { useDispatch } from "react-redux";
import { Autocompletelist } from "../autocomplete/autocompleteList/autocompleteList";
import { setCityData } from "../store/action";
import { StyledInput } from "./input.styled";
import { setAutocomplArr } from "../store/action";

export const Input = () => {
  const [cityName, setCityName] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (cityName.trim()) {
      dispatch(setCityData(cityName));
      setShowAutocomplete(false);
      setCityName("");
    }
  };
  const autocompItemClick = (name) => {
    dispatch(setCityData(name));
    setShowAutocomplete(false);
    setCityName("");
  };

  const handleChange = (e) => {
    setCityName(e.currentTarget.value);
    if (cityName.length > 1) {
      dispatch(setAutocomplArr(cityName));
      setShowAutocomplete(true);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
      setShowAutocomplete(false);
    }
  };

  return (
    <div>
      <StyledInput
        type="input"
        placeholder="Введи город"
        value={cityName}
        onKeyPress={onKeyPress}
        onChange={handleChange}
      />
      <Autocompletelist
        showAutocomplete={showAutocomplete}
        itemClick={autocompItemClick}
      />
    </div>
  );
};
