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
    gap:5%;
    justify-content: center;
    margin-top: 5%;
    padding-top: 10px;
    transition: all 500ms ease;
    height: 100%;
    width: 100%;
    overflow-x: scroll;
    transform: translateX(-0%);
    @media (max-width: 728px) {
      height: 100%;
      height: auto;
   
  }
  `
