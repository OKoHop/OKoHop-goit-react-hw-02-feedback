import { styled } from "styled-components";

export const Button = styled.button`
    margin-right: 10px;
    padding: 5px 10px;
    background-color: inherit;
    border: 1px solid black;
    border-radius: 5px;

    &:hover {
        background-color: teal;
    }
    &:focus {
        background-color: blue;
    }
`