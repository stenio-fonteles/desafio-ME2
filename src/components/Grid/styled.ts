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
    overflow-y:scroll ;
    display: flex;
    flex-direction: row;
    width: auto;
    gap:5%;
    justify-content: center;
    margin-top: 10%;
    padding-top: 10px;
    flex-wrap: nowrap;
    transform: translateX(0%);
    transition: all 500ms ease;
    width: 100%;
    `
export const Foto = styled.img `
    cursor: pointer;
    height: auto;
    max-width: 20%;

   `