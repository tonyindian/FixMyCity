import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation/Navigation";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100%;
  background-color: #ffffff;

  position: absolute;
  z-index: 5;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

const SubContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "35px"};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: bold;
  color: #e26236;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
`;

const Text = styled.p`
  font-size: ${(props) => props.fontSize || "19px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const IssueImg = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const UpvoteButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #ffffff;
  cursor: pointer;
  outline-style: none;
  border: 3px solid ${(props) => props.theme.yellowColor};
  font-size: 20px;
  font-weight: bold;
`;

const MoreDetails = (props) => {
  const issueCreated = new Date(props.created);

  return (
    <MainContainer>
      <Navigation
        showBackButton={true}
        setToggleMoreDetails={props.setToggleMoreDetails}
        page={"MoreDetails"}
      />
      <SubContainer
        style={{ height: "90%" }}
        width={"75%"}
        alignItems={"center"}
      >
        <SubContainer marginTop={"15px"}>
          <Title fontSize={"30px"}>{props.title}</Title>
          <Text>
            Reported by {props.author} on{" "}
            {issueCreated.toLocaleDateString("en-UK")}
          </Text>
          <Text>{props.upvoteCount} Upvotes</Text>
        </SubContainer>
        <SubContainer
          style={{ height: "200px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IssueImg src={props.image} alt="image of the issue" />
        </SubContainer>
        <SubContainer>
          <Title>Category</Title>
          <Text>{props.category}</Text>
        </SubContainer>
        <SubContainer>
          <Title>Description</Title>
          <Text>{props.description}</Text>
        </SubContainer>
        <SubContainer>
          <Title>Where</Title>
          <Text>{props.streetAndNumber}</Text>
          <Text>
            {props.zip} {props.city}
          </Text>
        </SubContainer>
        <UpvoteButton>Up-vote issue</UpvoteButton>
      </SubContainer>
    </MainContainer>
  );
};

export default MoreDetails;
