import styled from "styled-components";


    export const BlocoService = styled.div`
    margin: 1.5em 1em;
    background: #DDD;
    width: 20%;
    padding: .9em;
    border-radius: 4px;
    border: 1px solid #222831;
    .title{
        color: #F05454;
        display: block;
        font-weight: 550;
        background: #222831;
        margin: -.7em;
        padding: .7em .7em;
        margin-bottom: 15px;
        border-radius: 4px 4px 1px 1px;
        &::first-letter{
            text-transform: uppercase;
        }
    }
    .forte{
        font-weight: bold;
        color: #222831;
    }
    p{
        color: #222831;
        margin: 18px 0;
    }
    div {
        display: flex;
        justify-content: flex-start;
        button{
            padding: 8px;
            margin-right: 10px;
            margin-top: 5px;
            border: 1px solid #222831;
            background: #DDD;
            border-radius: 3px;
            transition: 0.5s;
            cursor: pointer;
            &:hover{
                background: #222831;
                color: #F05454;
            }
        }
    }

    `;