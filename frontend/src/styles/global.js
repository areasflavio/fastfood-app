import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;

    background-color: #FBAB7E;
    background-image: linear-gradient(315deg, #FBAB7E 0%, #F7CE68 100%);

  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
