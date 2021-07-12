import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #7CDBD5;   
    color: white;
    
    #footer{
    display: flex;
    background-color: #7CDBD5;
    border: 1px solid red;
    color: white;
    height: 10%;
    justify-content: center;
    align-items: center;
    
    #backArrowButton{
        background: none;
        border: none;
        
    }

    #nextArrowButton{
        background: none;
        border: none;
    }    
    
    #backArrow {
        width: 40px;
        height: auto;
    }
    #nextArrow {
        width: 40px;
        height: auto;
    }
    
    #buttonsContainer{
        margin-left: 50px;
        margin-right: 50px;
    }

    #leaveButton{
        border-radius: 20px;
        border: none; 
        background-color: #F53240;
        color: white;
        padding: 10px 20px;
        
    }
    #sendButton{
        border-radius: 20px;
        border: none; 
        background-color: #F53240;
        color: white;
        padding: 10px 20px;
    }
}
`

export const StepOneContainer = styled.div`
    background-color: #7CDBD5;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    color: white;
    height: 80%;
    #stepOneMain {
        border: 1px solid red;
        flex-grow: 1;
    }
    h1{
        margin-left: 10px;
    }

`
export const StepTwoContainer = styled.div`
    background-color: #7CDBD5;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    color: white;
    height: 80%;
    #stepOneMain {
        border: 1px solid red;
        flex-grow: 1;
    }
    h1{
        margin-left: 10px;
    }
`
export const StepThreeContainer = styled.div`
    background-color: #7CDBD5;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    color: white;
    height: 80%;
    #stepOneMain {
        border: 1px solid red;
        flex-grow: 1;
    }
    h1{
        margin-left: 10px;
    }
`

export const ReviewContainer = styled.div`
    background-color: #7CDBD5;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    color: white;
    height: 80%;
    #stepOneMain {
        border: 1px solid red;
        flex-grow: 1;
    }
    h1{
        margin-left: 10px;
    }
`





