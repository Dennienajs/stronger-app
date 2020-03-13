import { createGlobalStyle } from "styled-components";

// Iphone 6+ sizes
const screenHeight = "736px";
const screenWidth = "414px";

const darkTheme = {
  backgroundColor: "#2a2a2e",
  color: "#e6e6e6"
};

export const GlobalStyle = createGlobalStyle`
html {
  max-width: ${screenWidth};
  margin: auto;
}
body {
    background-color: ${darkTheme.backgroundColor};
    color: ${darkTheme.color};
    height: ${screenHeight};
    width: ${screenWidth};
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.37);
}
`;
