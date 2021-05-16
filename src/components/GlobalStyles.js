import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* My Styles */
  :root {
    --accent: #ecbbff;
    --primary: #8226d8;
    --body: #333333;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }


  body {
    background: #212121;
    color: var(--body);
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  h1,
  h2,
  h3 {
    font-weight: normal;
    margin: 0 0 0.75rem 0;
    padding: 0;
  }

  h1, h2 {
    font-family: "Abril Fatface", Georgia, 'Times New Roman', Times, serif;
    color: hsla(271deg, 70%, 50%, 1)
  }

  p {
    margin-bottom: 1rem;
  }

  em,
  i {
    color: #828282;
  }
`

export default GlobalStyles
