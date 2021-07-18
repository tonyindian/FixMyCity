import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import Axios from "../../Axios/index";
import IssueComponent, { ListLine } from './issuesComponent';
import { LastReportContainer } from '../../pages/Profile/ProfileStyled';
import MoreDetails from '../Map/Popup/MoreDetails';
import { fetchIssues } from '../../Axios/fetches';
import Navigation from '../../components/Navigation/Navigation';

const Main= styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    background: white;
    padding-left: 5%;

`
const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 7%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    
`

const ListTitle = styled.h1`
    margin-left: 10px;
    align-self: flex-start;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #F8CE46;
    
`


const ListOrigin = styled(ListTitle)`
    padding-top: 2%;
    width: 90%;
    color: black;   
    
`

const IssueContainer = styled(LastReportContainer)`
    height: 100%;
`

const IssueList = () => {
    
    const [issues, setIssues] = useState(null);
 
    const [selectedIssue, setSelectedIssue] = useState(null);

    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);


    useEffect(() => {
            async function fetchNewIssues() {
                const data = await fetchIssues();
                console.log(data);
                setIssues(data);
            }


        fetchNewIssues();
    }, []);



    return(
        <>
        <Navigation/>
            <Main>
                <ListWrapper>
                    <ListTitle>Reported by</ListTitle>
                    <ListOrigin>Sophia</ListOrigin>
                <IssueContainer>
                    {
                        issues
                        ?
                        issues.map((item, index) =>
                        <IssueComponent key={`${index}-${item.title}`} issue={item}
                            setSelectedIssue={setSelectedIssue}
                            setToggleMoreDetails ={setToggleMoreDetails}
                    />)
                        :
                        <h1>Loading...</h1>
                    }
                </IssueContainer>
                </ListWrapper>
            </Main>
        {toggleMoreDetails && (
        <MoreDetails
          setToggleMoreDetails={setToggleMoreDetails}
          title={selectedIssue.title}
          author={selectedIssue.user.username}
          created={selectedIssue.created}
          upvoteCount={selectedIssue.issue_count}
          category={selectedIssue.category}
          image={selectedIssue.image}
          description={selectedIssue.content}
          streetAndNumber={selectedIssue.adress}
          zip={selectedIssue.zip}
          city={selectedIssue.city}
        />
      )}
        

    </>
    );
};
export default IssueList