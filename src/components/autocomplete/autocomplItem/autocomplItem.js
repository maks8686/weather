import { AutocompleteItem } from "./autocomplItem.styled";

export const AutocomplItem = ({ name, itemClick }) => {
  return (
    <AutocompleteItem onClick={() => itemClick(name)}>{name}</AutocompleteItem>
  );
};
