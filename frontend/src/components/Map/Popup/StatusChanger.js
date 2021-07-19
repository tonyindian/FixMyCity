import React, { useState } from "react";
import styled from "styled-components";
import { patchIssue } from "../../../Axios/fetches";

const MainContainer = styled.div`
  width: 60%;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.yellowColor};
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const SubContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: ${(props) =>
    props.borderBottom || `3px solid ${props.theme.yellowColor}`};
  border-top: ${(props) =>
    props.borderTop || `3px solid ${props.theme.yellowColor}`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AcceptContainer = styled.div`
  width: 60%;
  height: 156px;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.yellowColor};
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const AcceptSubContainer = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: ${(props) => props.theme.justifyContent || "space-evenly"};
  align-items: center;
`;

const Text = styled.p`
  font-size: 19px;
  font-weight: bold;
  text-align: center;
`;

const StatusButton = styled.button`
  height: 50px;
  width: 45%;
  background-color: #ffffff;
  cursor: pointer;
  outline-style: none;
  border: 3px solid ${(props) => props.theme.yellowColor};
  border-radius: 5px;
  font-size: 19px;
  font-weight: bold;
`;

const StatusChanger = (props) => {
  const [toggleButton, setToggleButton] = useState(true);

  const [toggleStatusButton, setToggleStatusButton] = useState(false);

  const [toggleAccept, setToggleAccept] = useState(false);

  const handleToggleAccept = () => {
    setToggleAccept(true);
  };

  const handleToggleButton = () => {
    setToggleStatusButton(!toggleStatusButton);
  };

  const handleOpen = () => {
    setToggleStatusButton(false);
    props.setStatus("open");
    patchIssue(props.issueId, "open");
  };

  const handleResolved = () => {
    setToggleStatusButton(false);
    props.setStatus("resolved");
    setToggleAccept(false);
    setToggleButton(false);
    patchIssue(props.issueId, "resolved");
  };

  const handleInProgress = () => {
    setToggleStatusButton(false);
    props.setStatus("in progress");
    patchIssue(props.issueId, "in progess");
  };

  return (
    <>
      {toggleButton && (
        <StatusButton onClick={handleToggleButton}>Status</StatusButton>
      )}
      {toggleStatusButton && (
        <MainContainer>
          <SubContainer borderTop={"none"} onClick={handleOpen}>
            <Text>open</Text>
          </SubContainer>
          <SubContainer
            borderBottom={"none"}
            borderTop={"none"}
            onClick={handleToggleAccept}
          >
            <Text>resolved</Text>
          </SubContainer>
          {props.superUser && (
            <SubContainer borderBottom={"none"} onClick={handleInProgress}>
              <Text>in progress</Text>
            </SubContainer>
          )}
        </MainContainer>
      )}
      {toggleAccept && (
        <AcceptContainer>
          <AcceptSubContainer>
            <Text>
              Are you sure you want to resolve this issue? It cannot be
              reverted.
            </Text>
          </AcceptSubContainer>
          <AcceptSubContainer>
            <StatusButton onClick={handleResolved}>Yes</StatusButton>
            <StatusButton onClick={() => setToggleAccept(false)}>
              No
            </StatusButton>
          </AcceptSubContainer>
        </AcceptContainer>
      )}
    </>
  );
};

export default StatusChanger;
