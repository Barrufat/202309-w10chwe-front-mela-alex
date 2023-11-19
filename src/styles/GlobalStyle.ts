import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

body {
  margin: 0;
  background-color: ${({ theme }) => theme.colors.back}
}

p{
  margin:0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
    font-size: 20px;
}

button,
input {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

h1,
h2 {
  margin: 0;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
}

button {
  cursor: pointer;
}

.main-container{
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

`;

export default GlobalStyle;
