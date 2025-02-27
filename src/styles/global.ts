import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  a {
    text-decoration: none;
    color: inherit;
  };

  button, a, input[type="submit"] {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover, input[type="submit"]:hover {
    filter: brightness(.9);
  };
`;
