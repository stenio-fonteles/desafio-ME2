import styled, { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`
export const Component = styled.div `
    text-align: center;

`


export const Img = styled.img`
    margin-top: 1%;
    height: 60%;
    width: auto;
    box-shadow: 50px 50px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    @media (max-width: 728px) {
     width: 100%;
  }
`;

export const Paragrafo = styled.p `
    font-size: 2.5rem;
    width: 50%;
    background-color:white ;
    font-weight: bold;
    color: white;
    text-align: left;
    position: absolute;
    top: 80%;
    left: 5%;
    padding: 10px;
    box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.2);
   background-color: transparent;
    @media (max-width: 1002px) {
     display: none;
    }
`
export const H1 = styled.h1 `
font-weight: bolder;
    font-size: 2.5rem;
    width: 50%;
    color: #B22222;
 
    text-align: left;
    position: absolute;
    top: 74%;
    left: 5%;
    padding: 10px;
    @media (max-width: 1002px) {
     display: none;
    }

`
export const H3 = styled.h3 `
    display: none;
    @media (max-width: 728px) {
      background-color: white !important;
      display: inline;
    }

`

export const Video = styled.video `
  height: auto;
  width: 100%;
  box-shadow: 50px 50px 50px 50px rgba(0, 0, 0, 0.2);
`