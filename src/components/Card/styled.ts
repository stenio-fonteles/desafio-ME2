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
  

`

export const Img = styled.img `
    width: 250px;
    height: 300px;
    cursor: pointer;
    border-radius: 2%;
    @media (max-width: 728px) {
      width: 90%;
      height: auto;
    }

`

export const H3 = styled.h3 `
    margin-left: 5%;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 5px;

`
export const Div = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
export const P = styled.p `
margin: 5%;
    font-size: 2rem;

`

