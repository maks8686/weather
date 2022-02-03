import styled from "styled-components";
import { baseTheme } from './theme';

export const StyledApp=styled.div`
overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
display: flex;
flex-direction: column;
background: linear-gradient(${baseTheme.colors.primary},${baseTheme.colors.secondary});
height:100vh;
`

