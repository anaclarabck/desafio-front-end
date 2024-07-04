import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    background-color: ${colors.grayLight};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
