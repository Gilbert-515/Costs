import styled from "styled-components";

    export const Div = styled.div`
        padding: 1em 2em;
        padding-left: 3.5em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
       
        h1{
            background: #222831;
            color: #F05454;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 8px;
        }

        button{
            background: #222831;
            color: #DDDDDD;
            cursor: pointer;
            height: 40px;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
            transition: .5s;
            padding: 8px;
            &:hover{
                color: #F05454;
            }
        }
        .info{
            width: 100%;

            span{
                font-weight: 700;
            }
            p{
                margin: 14px 0;
            }
            hr{
                margin-top: 25px;
            }
            form{
                width: 32%;
                
            }
        }
        
    `;

    export const ServiceArea = styled.div`
        padding: 1em 3.5em;

        .services{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .serviceItem{
            margin: auto -1em;
        }
    `;