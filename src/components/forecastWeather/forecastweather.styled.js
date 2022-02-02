import styled from "styled-components";

export const StyledForecast = styled.div`
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 auto;
  color: #ffffff;
`;

export const StyledForecastCard = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const DateAndTemp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
