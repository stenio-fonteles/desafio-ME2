import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 30%;
    background-color: wheat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Div = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    h2{

        font-size: 2.5rem;
        margin-top: 5%;
    }

`