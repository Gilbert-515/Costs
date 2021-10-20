import styled from "styled-components";

    export const Rodape = styled.footer`
        position: relative;
        bottom: 0;
        padding: 30px;
    `;

    export const Ul = styled.ul`
        display: flex;
        list-style: none;
        justify-content: center;
    `;

    export const Li = styled.li`
        margin: 10px;
        color: #DDDDDD;
        cursor: pointer;
        font-size: 20px;
        transition: 0.3s;
        &:hover{
            color: #F05454;
        }
    `;

    export const Copy = styled.div`
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
        color: #DDDDDD;
        span{
            color: #F05454;
        }
    `;