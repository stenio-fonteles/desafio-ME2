import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    margin-top: 1%;
    background-color: #48D1CC; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    border-radius: 5%;
    @media (max-width: 728px) {
      width: 100%;
      height: auto;
    }
`;