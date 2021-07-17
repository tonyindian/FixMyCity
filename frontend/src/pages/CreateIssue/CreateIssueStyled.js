import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;   
    color: black;
    
    
    #footer{
    display: flex;   
    color: black;
    height: 10%;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
   
    
    #backArrowButton{
        background: none;
        border: none;
        
    }   
    
    #buttonsContainer{
        display: flex;
        margin-left: 50px;
        margin-right: 50px;
        justify-content: center;
        align-items: center;

        #nextButton {
            border: 2px solid #5D61F6;
            background-color: white;
            font-size: 20px;
            font-weight: bold;
            width: 240px;
            height: 60px;
            margin-left: auto;
        }  

        #sendButton{
            border: 2px solid #E26236;
            background-color: white;
            font-size: 20px;
            font-weight: bold;
            width: 240px;
            height: 60px;
            margin-left: auto;
        }

        #homeButton{
            border: 2px solid #5D61F6;
            background-color: white;
            font-size: 20px;
            font-weight: bold;
            width: 240px;
            height: 60px;
            margin-left: auto;
        }
    }    
}
`
export const StepOneContainer = styled.div`
       
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 90%;
    #stepOneMain {
       
        flex-grow: 1;
    }
    p{
        font-size: 20px;
        margin-top: 20px;
        margin-left: 20px;
        align-self: flex-start;
    }

`
export const StepTwoContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    color: black;
    height: 90%;
   
    .pageTitle{
        font-size: 20px;
        margin-left: 20px;
        margin-top: 40px;
    }   
`
export const StepThreeContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 90%;
   
    .pageTitle{
        font-size: 20px;
        margin-left: 20px;
        margin-top: 40px;
        align-self: flex-start;
    }   

    #titleCategoryDescriptionContainer{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;       
        border: none;
        width: 80%;
        height: 80%;
        margin-top: 30px;
        

        #titleContainer{
            margin-left: 20px;
            height: 10%;
            #title{
            width: 90%;
            height: 20px;           
            border: 1px solid black;
            }
        }
       
        #categoryContainer{
            margin-top: 20px;
            margin-left: 20px;
            height: 10%;
            #selectCategory{                
                border: 1px solid black;
                width: 90%;
                height: 20px;
            }
        }
        #descriptionContainer{
            margin-top: 20px;
            margin-left: 20px;
            flex-grow: 1;
            #description{
            width: 90%;     
            height: 60%;     
            border: 1px solid black;
            }
        }
       
    }
`

export const ReviewContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    height: 90%;
 
    #pageTitle{
        margin-left: 20px;
        align-self: flex-start;
    }

    .itemTitle{
        margin: 5px;
        margin-left: 10px;
        color: #E26236;        
    } 
    #powerTitle{
        font-size: 30px;
    }

    .itemText{
        margin: 0px;
        margin-bottom: 5px;
        word-wrap: break-word;
        margin-right: 10px;
    }

    #reviewContainerBox{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 80%;
        height: 80%;
        p{
            margin-left: 10px;
        }
        .reviewIconNameContainer{
            display: flex;
            align-items: center;
            margin-left: 10px;
        }

        .reviewIcons{
            width: 30px;
            height: auto;
        }
    }

`

export const Box = styled.div`
 
    width: 100px;
    height: 100px;
    margin: 10px;

    #selectedImage {            
       max-width: 100%; 
       height: auto;
       max-height: 100%;   
       object-fit: fill;
   
    }
`

export const ThankYouContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    height: 90%;
   
    h1{
        margin-left: 30px;
        margin-right: 20px;
        text-align: center;
    }
    #confirmationIcon{
        width: 150px;
        height: auto;
    }
`

export const SomethingWentWrongContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    height: 90%;
   
    #sad{
        width: 100px;
        height: auto;
    }
    h1{
        margin-left: 20px;
        margin-right: 20px;
        text-align: center;
    }
`




