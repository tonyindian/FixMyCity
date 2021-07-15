import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import Axios from "../../Axios/index";
import IssueComponent from './issuesComponent';


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
    margin-top:5%;
    border: 1px solid black;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    color: black;    
`

const IssueList = () => {
    
    const [issues, setIssues] = useState(null);

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
        <Main>
            <ListWrapper>
                <ListTitle>Reported by</ListTitle>
                <ListOrigin>Sophia</ListOrigin>
                <div>
                {
                    issues
                    ?
                    issues.map((item, index) => <IssueComponent key={`${index}-${item.title}`} issue={item}/>)
                    :
                    <h1>No entries found!</h1>
                }
                </div>

            </ListWrapper>
        </Main>
    )

}
export default IssueList