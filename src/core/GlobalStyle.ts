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
        color: ${({ theme }) => theme.color.textPrimary};
        background: ${({ theme }) => theme.color.backgroundBody};
        overflow-x: hidden;
        transition: all 0.5s ease-out;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            font-size: 16px;
        }
    }
`;
