 import styled from "styled-components";

    export const Div = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;

        label{
            margin-bottom: .6em;
            font-weight: bold;
        }
        input{
            border: none;
            border-radius: 0;
            padding: .7em;
            &::placeholder{
                color: #bbb;
            }
        }
        
    `;