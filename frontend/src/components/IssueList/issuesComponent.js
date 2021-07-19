import styled from "styled-components";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { AddressContainer, FetschingContainer, LastReportContainer, Main, MoreContainer } from "../../pages/Profile/ProfileStyled";
import { MoreDetailsLink } from "../Map/Popup/PopupContent";


export const Container =styled(FetschingContainer)`


/* 
    p {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
    } */
`
export const AdressWrapper =styled(AddressContainer)`   
        height: 96%;
        width: 49%;
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 300;

        p {
            font-size: 12px;
            font-weight: 300;


    }`

export const DateWrapper =styled.div`
        border: solid green;
    `

export const UpvotesWrapper =styled.div`
        border: solid red;
    `


const IssueComponent = (props) => {
    return (
        <>
                
                    <Container onClick={() => {
                        props.setSelectedIssue(props.issue)
                        props.setToggleMoreDetails(true)
                    }}>
                        <p>{props.issue.title}</p>
                        <AdressWrapper>
                            <p>{props.issue.adress}</p>
                            <p> {props.issue.zip}, {props.issue.city}</p>
                        </AdressWrapper>

                        <DateWrapper>
                            May 2021
                        </DateWrapper>

                        <UpvotesWrapper>
                            38 upvotes
                        </UpvotesWrapper>

                    </Container>
                
        </>
    )
}

export default IssueComponent;

/* 
<p>{props.issue.issue_count}</p>
                        {
                            props.issue.image
                            ?
                            <img src={props.issue.image} alt={"issue-pix"}/>
                            :
                            <div>No image</div>
                        } */