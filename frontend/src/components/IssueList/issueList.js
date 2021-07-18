import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import Axios from "../../Axios/index";
import IssueComponent, { ListLine } from './issuesComponent';
import { LastReportContainer } from '../../pages/Profile/ProfileStyled';
import MoreDetails from '../Map/Popup/MoreDetails';

const Main= styled.div`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    background: white;

`
const ListWrapper = styled.div`
    width: 100%;
    height: 10%;
    margin-top: 2%;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 10px;
    color: #F8CE46;
`
const ListOrigin = styled(ListTitle)`
    padding-top: 2%;
    color: black;    
`

const IssueContainer = styled(LastReportContainer)`
    padding-top: 30%;
    `


const IssueList = () => {
    
    const [issues, setIssues] = useState(null);
 
    const [selectedIssue, setSelectedIssue] = useState(null);

    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);


    useEffect(() => {
        async function fetchIssues() {
            const url = "issues/";
            try {
                const resp = await Axios.get(url);
                if (resp.status === 200) {
                    setIssues(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
                
            }
        }

        fetchIssues();
    }, []);



    return(
        <>
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