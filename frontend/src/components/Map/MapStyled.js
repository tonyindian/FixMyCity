import styled from "styled-components";

export const MainContainer = styled.div`
    height: ${props => props.height || "50%"};
    width: ${props => props.width || "50%"};

    display: flex;
    justify-content: center;
`

export const MarkerDivStyle = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    line-height: ${props => props.lineHeight};
    background-color: red;
    color: white;
    border-radius: 50%;
    font-size: 22px;
    text-align: center;
    border: 2px solid black;
`

export const MarkerImgStyle = styled.img`
    cursor: pointer
`