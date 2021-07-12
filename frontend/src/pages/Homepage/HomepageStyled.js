import React from 'react';
import styled from 'styled-components';

export const Main= styled.div`
    border: solid yellow;
    width: 100%;
    height:90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    background: #7cdbd5;

`
export const MapContainer= styled.div`
    border: solid red;
    display: flex;
    justify-content: center;
    width: 80%;
    height: 60%;
    margin-bottom: 5%;
    margin-top: 5%;
    

`

export const ReportButton= styled.button `
    margin: 10px;    
    background: #F53240;
    border: 1.5px rgba(212, 208, 208, 0.619) solid;
    width: 30%;
    height: 40px;
    border-radius: 25px;
    color: white;
    font-size: medium;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px; 
    font-size: ${props => props.theme.textSizeS};
    
    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: grey;
        transform: translateY(4px);
    } 
` 
export const SearchBar = styled.div`
	width: 85%;
    height: 40px;
    border-radius: 25px;
    background-color: white;
	text-align: center;
	border-bottom: 1px solid rgb(206, 206, 206);
	display: flex;
	justify-content: center;
	align-items: center;
	
`

