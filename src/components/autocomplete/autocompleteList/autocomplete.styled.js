import styled from "styled-components";

export const Autocomplete = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: none;
  outline: none;
  z-index: 1000;
  position: absolute;
  padding: 0 0 0 60px ;
  margin-top: 250px;
  max-height: 200px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
