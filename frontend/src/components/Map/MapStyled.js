// comment
import styled from "styled-components";

export const MainContainer = styled.div`
  height: ${(props) => props.height || "50%"};
  width: ${(props) => props.width || "50%"};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MarkerDivStyle = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  line-height: ${(props) => props.lineHeight};
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 22px;
  text-align: center;
  border: 2px solid black;
`;

export const MarkerImgStyle = styled.img`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ChooseButton = styled.button`
  height: 100%;
  width: 50%;
  border: 3px solid black;

  background-color: ${(props) => props.backgroundColor || "white"};
`;

export const SatelliteButton = styled.button`
  height: 30px;
  width: 30px;
  top: 60px;
  right: 15px;
  border: 4px solid red;
  z-index: 10;

  position: absolute;
`;
