import styled from "styled-components";

    export const AreaTexto = styled.textarea`
        width: 100%;
        border: none;
        border-radius: 0;
        margin-top: .6em;
        padding: .7em;
        &::placeholder{
            color: #bbb;
        }
        &:focus{
            border: 1px solid #222831;
            outline: none;
        }
    `;

    export const Label = styled.label`
        font-weight: bold;
        color: #222831;
    `;