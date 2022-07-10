import styled, { keyframes } from "styled-components"
type TClick = {
    active:Boolean
}

export const Container = styled.div`
    padding-bottom:20px ;
    display: flex;
    flex-direction: column;
    align-items: center;
  
`

export const Title = styled.h3`
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5%;
`

export const DescriptionText = styled.p <TClick>`
    display: ${props => props.active ? "block" : "none"};
    background-color: black;
    max-width: 200px;
    font-size: 2rem;
    animation-name: ${props => props.active ? Pulse : ""};
    animation-duration: 2s;
    animation-iteration-count: unset;
    word-break: break-all;

    color: white;
    overflow: hidden;   
    text-align: center;
  
    //white-space: nowrap;
    word-break: break-all;
    cursor: pointer;
    
`
export const Pulse = keyframes`
    0% {
      height: 10px;
      color: red;
    }
    100% {
    height: 300px;
    color: white;
    }
`