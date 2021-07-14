import styled from "styled-components";

export const MainContainer = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: #7CDBD5;   
    color: white;
    
    
    #footer{
    display: flex;
    background-color: #7CDBD5;
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
    
    display: flex;
    flex-direction: column;
    color: white;
    height: 90%;
    #stepOneMain {
       
        flex-grow: 1;
    }
    h1{
        margin-left: 10px;
    }

`
export const StepTwoContainer = styled.div`
    background-color: #7CDBD5;
    display: flex;
    flex-direction: column;
    color: white;
    height: 90%;
   
    h1{
        margin-left: 10px;
    }
`
export const StepThreeContainer = styled.div`
    background-color: #7CDBD5;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    height: 90%;
   
    h1{
        margin-left: 10px;
        align-self: flex-start;
    }
    #titleCategoryDescriptionContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #02C8A7;
        width: 80%;
        height: 80%;
        #categoryContainer{
            margin-left: 10px;
        }
        #descriptionContainer{
            margin-left: 10px;
        }
        #titleContainer{
            margin-left: 10px;
        }
    }
`

export const ReviewContainer = styled.div`
    background-color: #7CDBD5;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    height: 90%;
 
    h1{
        margin-left: 10px;
        align-self: flex-start;
    }

    
    #reviewContainerBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #02C8A7;
        width: 80%;
        height: 80%;
        p{
            margin-left: 10px;
        }
    }

`

export const Box = styled.div`
 
    width: 150px;
    height: 250px;
    margin: 10px;

    #selectedImage {            
       max-width: 100%; 
       height: auto;
       max-height: 100%;   
       object-fit: fill;
   
    }
`





