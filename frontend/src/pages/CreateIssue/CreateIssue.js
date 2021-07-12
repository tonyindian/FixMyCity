import React from "react"
import { MainContainer } from "./CreateIssueStyled"
import Banner from "../../components/Banner/Banner"
import {stepOneContainer} from "./CreateIssueStyled" 


const StepOne = () => {

    return (
        <>        
        <stepOneContainer>
            <p>Test</p>
        </stepOneContainer>
        </>

    )
}


const CreateIssue = () => {



    return (
        <>
        <Banner>
        </Banner>
        <MainContainer>            
            <StepOne>
            </StepOne>
        </MainContainer>
        </>
    )


}

export default CreateIssue