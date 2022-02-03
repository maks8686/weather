
import { AutocompleteItem } from "./autocompleteItem.styled";

export const AutocomplItem = ({ name, itemClick }) => {
  const handleClick=()=>{
    itemClick(name)
  }
  return (
    <AutocompleteItem onClick={handleClick}>{name}</AutocompleteItem>
  );
};
