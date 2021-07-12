import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #7CDBD5;
    display: flex;   
    justify-content: space-between;
    align-items: center;
    height: 10%;

    #logo {
        width: 100px;
        height: auto;
    }

    #menu {
        background: none;
        border: none;
        cursor: pointer;
        margin-right: 10px;
    }


    #menu_img {
        width: 40px;
        height: auto;        
    }
`

export const MenuStyled = styled.div`
    width: 100px;
    height: 120px;
    border: 1px solid lightblue;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: #02C8A7;    
    display: flex;
    flex-direction: column;
    

    .menuOption{
        background: none;
        border: 1px solid white;
        height: 40px;
        color: white;
    }
    .menuOption:hover{
        background-color: #7CDBD5;
    }
`