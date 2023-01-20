import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;

    box-sizing: border-box;
    border: none;
    list-style: none
  }

  :root{
    --color-white: #f1f1f1;
    --color-text: #5D9CEC;
    --color-gray: #656565;
    --color-gray-ligth: #CECECE;
    --color-black: #000000;
  }

`;

export default GlobalStyle;
