
type TClick = {
    active:Boolean
}

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    `
export const Div = styled.div <TClick>`
    overflow:scroll;
    height: 100vh;
    bottom: 0;
    left:0;
    width: 40%;
    position: fixed;
    background-color: black;
    display: none;
    z-index: 90;
    display: ${props => props.active ? "block" : "none"};
    animation-name: ${props => props.active ? Pulse : ""};
    animation-duration: 1s;
    animation-iteration-count: unset;
`

export const Pulse = keyframes`
    0% {
      display: none;
      left: -100%;
    }
    100% {
    display: inline;
    }
`

export const Button = styled.button `
    position: absolute;
    right:0;
    height: 5%;
    width: 5%;

`

export const Content = styled.div `
    color: white;
    align-items: center;
`

export const Grid = styled.div `
    display: grid;
    grid-template-columns: 1fr ;
    

    
`

import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
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

export const P = styled.p `
margin: 5%;
    font-size: 2rem;
    @media (max-width: 728px) {
      font-size: 1.5rem;
    }
`

export const Buttons = styled.button `
    background-color:  #48D1CC;
    border: none;
    width: 50%;
    padding: 5% 0%;
    color:white;
    font-size: 1.5rem;
    font-weight: bolder;
    cursor: pointer;
`

export const Flex = styled.div `
display: flex;
flex-direction: row;
`

export const InputTextArea = styled.input `
    height: 10vh;
    width:100%;
    color:black;
    font-weight: bold;
    font-size: 1.5rem;
`