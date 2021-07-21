import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import IssueComponent from './issuesComponent';
import MoreDetails from '../Map/Popup/MoreDetails';
import { fetchIssues,fetchProfileInfo } from '../../Axios/fetches';
import Navigation from '../../components/Navigation/Navigation';


const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 7%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 5%;
    padding-right: 5%;    
`
const Main= styled.div`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 3%;
    padding-right: 3%;
`

const IssueList = (props) => {       

    const [issues, setIssues] = useState(null); 
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [issuesLength,setIssuesLength] = useState(0);
    const [toggleMoreDetails, setToggleMoreDetails] = useState(false);  


    useEffect(() => {               
        async function fetchUserId() {
            const profileInfo = await fetchProfileInfo();          
            const userId = profileInfo.id;
            let data;
            if (props.profile){
                data = await fetchIssues(userId);
            }else if(props.userIdReadOnly){
                data = await fetchIssues(props.userIdReadOnly);            
            }else{
                data = await fetchIssues();
            }
            console.log(data);
            setIssues(data);
            setIssuesLength(data.length);            
        }
    fetchUserId();
}, []);    

    const lastIndex = () => {
        
        const returnValue = props.displayIssues? props.displayIssues : issuesLength;
        return returnValue;
    }

    return(
        <>
        {props.hideNavBar?
            null
            :<Navigation showBackButton={true} page={"issues"}/>           
        }
            <Main>
                <ListWrapper>

                    {
                    (issues && issues.length !==0)?
                        issues.slice(0,lastIndex()).map((item, index)=> 
                        <IssueComponent key={`${index}-${item.title}`} issue={item}
                            setSelectedIssue={setSelectedIssue}
                            setToggleMoreDetails ={setToggleMoreDetails}
                    />)
                        :
                        <h1>Loading...</h1>
                    }
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