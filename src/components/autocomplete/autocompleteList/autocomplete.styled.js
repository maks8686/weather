import styled from "styled-components";

export const Autocomplete = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-left: 50%;
  border: none;
  margin: 0 auto;
  padding: 5px;
  margin-top: 5px;
  font-size: medium;
  outline: none;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 40px; left: 0; bottom: 0; right: 0;
  max-height: 200px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
