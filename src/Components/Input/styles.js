 import styled from "styled-components";

    export const Div = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;

        label{
            margin-bottom: .6em;
            font-weight: bold;
            color: #222831;
        }
        input{
            border: none;
            border-radius: 0;
            padding: .7em;
            &::placeholder{
                color: #bbb;
            }
            &:focus{
                border: 1px solid #222831;
                outline: none;
            }
        }
        
    `;