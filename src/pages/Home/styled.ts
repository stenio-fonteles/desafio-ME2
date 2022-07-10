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
    color: black;
    text-align: left;
    position: absolute;
    top: 50%;
    left: 15%;
    padding: 10px;
    box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.2);
    @media (max-width: 728px) {
      left: 0;
      top:70%;
      width: 100%;
     font-size: 2.0rem;
     display: none;
    }
`
export const H1 = styled.h1 `
    font-size: 2.5rem;
    width: 50%;
    color: #B22222;
    z-index: 99;
    text-align: left;
    position: absolute;
    top: 44%;
    left: 15%;
    padding: 10px;
    @media (max-width: 728px) {
      background-color: black;
      border-radius: 2%;
      left: 5%;
      top:65%;
      width: 100%;
     font-size: 2.0rem;
     display: none;
    }

`
export const H3 = styled.h3 `
    display: none;
    @media (max-width: 728px) {
      display: inline;
    }

`