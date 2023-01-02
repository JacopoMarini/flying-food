import { css } from '@emotion/react'

export const globalStyle = css`
  * {
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Futura PT', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .prova {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`
