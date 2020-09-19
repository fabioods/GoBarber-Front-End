import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-size: 62.5%; /** 10px; */
    color: #fff;
    background: #312E38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
