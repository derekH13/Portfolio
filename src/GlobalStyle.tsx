import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(16, 33, 41,0.95);
    width: 0.5rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.4);
    border-radius: 0.5rem;

  }

`
