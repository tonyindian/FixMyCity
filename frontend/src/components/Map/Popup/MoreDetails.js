import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;

  position: absolute;
  z-index: 4;
  top: 0;

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

const MoreDetails = (props) => {
  return <MainContainer></MainContainer>;
};

export default MoreDetails;
