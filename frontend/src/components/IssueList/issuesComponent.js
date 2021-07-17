import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListLine = styled.div`
  height: 8px;
  width: 100%;
  background: ${props => props.theme.yellowColor};
  border-radius: 3px 3px 0 0;
  border-color: black;
  `


const IssueComponent = (props) => {
    return (
        <Link to={`/issues/${props.issue.id}`} style={{"textDecoration": "none"}}>
                <h1>{props.issue.title}</h1>
                <h2>{props.issue.user.username}</h2>
                <p>{props.issue.issue_count}</p>
                {
                    props.issue.image
                    ?
                    <img src={props.issue.image} alt={"issue-pix"}/>
                    :
                    <div>No image</div>
                }
        </Link>
    )
}

export default IssueComponent;
