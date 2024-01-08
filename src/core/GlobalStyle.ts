import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 18px;
        letter-spacing: 1.6px;
        color: red;
        overflow-x: hidden;
    }
`;
