import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.colors.third};

    margin: 0px;
    padding: 0px;

    
  }

  li {
  list-style-type: none;
  }

  button {
    cursor: pointer;
    border: 0px;
  } 

  
`;

export default GlobalStyle;
