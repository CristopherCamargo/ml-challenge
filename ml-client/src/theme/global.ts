import { createGlobalStyle } from "styled-components";
import Theme from "./";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  body {
    background-color: ${Theme.colors.gray};
  }
`;

export default GlobalStyles;
