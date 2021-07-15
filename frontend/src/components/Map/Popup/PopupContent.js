import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 15px;

  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const IssueImg = styled.img``;

const Text = styled.p`
  font-size: ${(props) => props.fontSize || "12px"};
  font-style: ${(props) => props.fontStyle || "normal"};

  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const MoreDetailsLink = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #f8ce46;

  margin-right: ${(props) => props.marginRight || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};

  :hover {
    text-decoration: underline;
  }
`;

const PopupContent = (props) => {
  const issueCreated = new Date(props.created);

  return (
    <>
      <MainContainer>
        <Title>{props.title}</Title>
        <Text fontStyle={"italic"} fontSize={"10px"} marginBottom={"10px"}>
          {issueCreated.toLocaleDateString("en-UK")}
        </Text>
        <Text marginRight={"auto"}>{props.upvoteCount} upvotes</Text>
        <MoreDetailsLink
          marginTop={"10px"}
          onClick={() => props.setToggleMoreDetails(true)}
        >
          Click here for more details
        </MoreDetailsLink>
      </MainContainer>
    </>
  );
};

export default PopupContent;
