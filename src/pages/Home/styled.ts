import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`
export const Component = styled.div `
    text-align: center;

`
export const Img = styled.img`
    margin-top: 1%;
    height: 60vh;
    width: auto;
    box-shadow: 50px 50px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Paragrafo = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    width: 50%;
    background-color:white ;
    color: black;
    text-align: left;
    position: absolute;
    top: 50%;
    left: 15%;
    padding: 10px;
    box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.2);
`
export const H1 = styled.h1 `
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    width: 50%;
  
    color: #B22222;
    z-index: 99;
    text-align: left;
    position: absolute;
    top: 44%;
    left: 15%;
    padding: 10px;

`