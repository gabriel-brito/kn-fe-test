import { createGlobalStyle } from 'styled-components'

const theme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --aqua: #12B8FF;
    --bgAqua: #12B8FF;
    --bgColor: #E5E5E5;
    --black: #3C4858;
    --darkGrey: #8492A6;
    --disabledGrey: #DADEE4;
    --lightBgColor: #F0F2F4;
    --white: #FFFFFF;
  }
`

export default theme
