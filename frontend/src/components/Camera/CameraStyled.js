import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    text-align: center;
    
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    
    /*max-width: 80%;
    max-height: 80%;*/
    margin: 10px;

    .img {
    height: inherit;
    max-width: inherit;
    }
`
export const InputBox = styled.input`
    display: none;
`