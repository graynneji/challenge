/* eslint-disable no-unused-vars */
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;


 }

body {
  font-family: "Euclid Circular B", sans-serif;
  color: #072635;



  line-height: 2rem;
  font-size: 1.2rem;
  overflow: auto;
  font-weight: bold;
  background-color: #F6F6F6;
}


@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Light.ttf') format('truetype');
  font-weight: light;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-SemiBold.ttf') format('truetype');
  font-weight: semibold;
  font-style: normal;
}@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Light.ttf') format('truetype');
  font-weight: light;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Euclid Circular B';
  src: url('./fonts/Euclid-Circular-B-SemiBold.ttf') format('truetype');
  font-weight: semibold;
  font-style: normal;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
 
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
}
`;
export default GlobalStyles;
