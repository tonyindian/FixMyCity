import styled from "styled-components";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { AddressContainer, FetschingContainer, LastReportContainer, Main, MoreContainer } from "../../pages/Profile/ProfileStyled";
import { MoreDetailsLink } from "../Map/Popup/PopupContent";


export const Container =styled(FetschingContainer)`
    /* border: solid green 2px; */
/*     height: 35%;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid black 1px; */
    padding: 4.2%;


    p {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
    }
`
export const AdressWrapper =styled(AddressContainer)`   
        
        p {
        font-weight: normal;
        font-size: 12px;
        padding: 2%;


    }`


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
                            <p> {props.issue.zip} {props.issue.city}</p>
                        </AdressWrapper>

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