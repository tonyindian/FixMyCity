import styled from "styled-components";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {AddressContainer, FetschingContainer, UpvotesContainer, DateContainer } from "../../pages/Profile/ProfileStyled";
import { MoreDetailsLink } from "../Map/Popup/PopupContent";




const IssueComponent = (props) => {
    return (
        <>
            <FetschingContainer 
            onClick={() => {
                props.setSelectedIssue(props.issue)
                props.setToggleMoreDetails(true)
                }}>

                <AddressContainer>        
                    <p className='issue'>{props.issue.title}</p>
                    {props.issue.adress}, {props.issue.zip} {props.issue.city}
                </AddressContainer>

                    <UpvotesContainer>
                        <DateContainer>
                        {props.issue.modified.substr(0,10)}
                        </DateContainer>
                    <p className='upvotes'>Upvotes: {props.issue.upvote_count}</p>
                    </UpvotesContainer>

             </FetschingContainer>
        </>
    )
}

export default IssueComponent;

