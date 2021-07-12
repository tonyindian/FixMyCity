import React, {useState} from "react"
import { MainContainer } from "./CreateIssueStyled"
import {StepOneContainer, StepTwoContainer, StepThreeContainer, ReviewContainer} from "./CreateIssueStyled" 
import leftArrow from "../../assets/images/left-arrow.png"
import rightArrow from "../../assets/images/right-arrow.png"


const StepOne = () => {

    return (
        <>        
        <StepOneContainer>
            <h1>Step 1/3</h1>
            <div id="step1">
                <p>content</p>
            </div>
        </StepOneContainer>
        </>

    )
}

const StepTwo = () => {

    return (
        <>        
        <StepTwoContainer>
            <h1>Step 2/3</h1>
            <div id="step2">
                <p>content</p>
            </div>
        </StepTwoContainer>
        </>
    )
}


const StepThree = () => {

    return (
        <>        
        <StepThreeContainer>
            <h1>Step 3/3</h1>
            <div id="step3">
                <p>content</p>
            </div>
        </StepThreeContainer>
        </>
    )
}


const Review = () => {

    return (
        <>        
        <ReviewContainer>
            <h1>Review</h1>
            <div id="review">
                <p>content</p>
            </div>
        </ReviewContainer>
        </>
    )
}




const CreateIssue = () => {

    const [toggleShowStep1, setToggleShowStep1] = useState(true);
    const [toggleShowStep2, setToggleShowStep2] = useState(false);
    const [toggleShowStep3, setToggleShowStep3] = useState(false);
    const [toggleShowReview, setToggleShowReview] = useState(false);
    const [toggleIsPageComplete, setToggleIsPageComplete] = useState(true)


    const nextButtonHandler = () => {
        if(toggleShowStep1 === true && !(toggleShowStep2 && toggleShowStep3 && toggleShowReview)){
            setToggleShowStep1(false);
            setToggleShowStep2(true);
        }
        if(toggleShowStep2 === true && !(toggleShowStep1 && toggleShowStep3 && toggleShowReview)){
            setToggleShowStep2(false);
            setToggleShowStep3(true);
        }
        if(toggleShowStep3 === true && !(toggleShowStep1 && toggleShowStep2 && toggleShowReview)){
            setToggleShowStep3(false);
            setToggleShowReview(true);
        }
    }

    const backButtonHandler = () => {
        if(toggleShowStep2 === true && !(toggleShowStep1 && toggleShowStep3 && toggleShowReview)){
            setToggleShowStep2(false);
            setToggleShowStep1(true);
        }
        if(toggleShowStep3 === true && !(toggleShowStep1 && toggleShowStep2 && toggleShowReview)){
            setToggleShowStep3(false);
            setToggleShowStep2(true);
        }
        if(toggleShowReview === true && !(toggleShowStep1 && toggleShowStep2 && toggleShowStep3)){
            setToggleShowReview(false);
            setToggleShowStep3(true);
        }
    }

    return (
        <>
        <MainContainer>            
            {toggleShowStep1===true?
                <>
                <StepOne/>
                </>
                :null        
            }
            {toggleShowStep2===true?
                <>
                <StepTwo/>
                </>
                :null        
            }
            {toggleShowStep3===true?
                <>
                <StepThree/>
                </>
                :null        
            }
            {toggleShowReview===true?
                <>
                <Review/>
                </>
                :null        
            } 
            <div id="footer">
                {toggleShowStep1===false?
                    <button id="backArrowButton" onClick = {backButtonHandler}><img src={leftArrow} id="backArrow" alt="back"></img></button>
                    :null
                }
                <div id="buttonsContainer">
                    {toggleShowStep1===true?
                    <button id="leaveButton">Leave</button>
                    :null
                    }
                    
                    {toggleShowReview===true && toggleIsPageComplete === true?
                        <button id="sendButton">Send</button>
                        :null
                    }                    
                </div>        
                {toggleIsPageComplete===true && toggleShowReview===false?              
                    <button id="nextArrowButton" onClick = {nextButtonHandler} ><img src={rightArrow} id="nextArrow" alt="next"></img></button> 
                    :null
                }
            </div>                            
           
        </MainContainer>
        </>
    )


}

export default CreateIssue