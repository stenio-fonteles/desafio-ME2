import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`
export const Template = styled.div `
    display: flex;
    flex-direction: row;
    width: auto;
    gap:5%;
    justify-content: center;
    margin-top: 10%;
    padding-top: 10px;
    overflow-x: scroll;
    overflow-y: scroll;
    `
export const Foto = styled.img `
    cursor: pointer;
    height: auto;
    max-width: 20%;
   `