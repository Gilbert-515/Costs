import  styled from "styled-components";

    export const Sessao = styled.section`
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4em;

        h1{
            font-size: 2.5em;
            margin-bottom: .5em;
            color: #222831;
            span{
                color: #F05455;
                font-style: italic;
            }
        }
        p{
            margin-bottom: 2em;
            color: #636369;
        }
        img{
            width: 350px;
            margin: 2em 0;
        }
    `;