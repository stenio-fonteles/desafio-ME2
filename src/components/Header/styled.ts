import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
}
`

export const Div = styled.div `
    height: 50px;
   cursor: pointer;
    background-color:#000080 ;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;


    `

export const H1 = styled.h1 `
    text-align: left;
    margin-left: 20px;
    font-size: 1.5rem;
    color: white;
`

