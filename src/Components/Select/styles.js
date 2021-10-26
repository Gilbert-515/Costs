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
        select{
            border: none;
            border-radius: 0;
            padding: .7em;
            &:focus{
                border: 1px solid #222831;
                outline: none;
            }
        }
        
    `;