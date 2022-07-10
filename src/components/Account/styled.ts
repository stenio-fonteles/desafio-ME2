import styled, { keyframes } from "styled-components";
type TClick = {
    active:Boolean
}

export const Container = styled.div `
    display: flex;
    flex-direction: column;


`
export const Div = styled.div <TClick>`
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
`