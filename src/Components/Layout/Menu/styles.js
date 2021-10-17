import styled from "styled-components";

    export const Header = styled.header`
        background: #30475E;  
        padding: 5px 0;
        margin-bottom: 10px;
    `;

    export const Ul = styled.ul`
        display: flex;
        list-style: none;
        justify-content: flex-end;
    `;

    export const Img = styled.img`
        margin: auto;
        margin-left: 20px;
        height: 55px;        
    `;

    export const Lk = styled.div`
        margin: 16px;
        a{
            color: #DDDDDD;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
            &:hover{
                color: #F05454;
            }
        }            
    `;