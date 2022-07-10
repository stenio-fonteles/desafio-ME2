import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
}
`
export const Container = styled.div `
  @media (max-width: 716px) {
    transform: translateX(250%);
    }
    @media (max-width: 659px) {
    transform: translateX(270%);
    }
    @media (max-width: 531px) {
    transform: translateX(290%);
    }
    @media (max-width: 442px) {
    transform: translateX(310%);
    }
    @media (max-width: 362px) {
    transform: translateX(330%);
    }
  

`

export const Img = styled.img `
    width: 250px;
    height: 300px;
    cursor: pointer;
    border-radius: 2%;
    @media (max-width: 728px) {
      width: 90%;
      height: 90px;
    }

`

export const H3 = styled.h3 `
    margin-left: 5%;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 5px;
    @media (max-width: 728px) {
      display: none;
    }

`
export const Div = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    

`
export const P = styled.p `
margin: 5%;
    font-size: 2rem;
    @media (max-width: 728px) {
      display: none;
    }
`

