import React from 'react';
import styled from 'styled-components';

export const Main= styled.div`
    width: 100%;
    height:100%;
    background: #7CDBD5;

`

export const SignUpButton= styled.button `
    margin: 10px;    
    background: none;
    border: 1.5px rgba(212, 208, 208, 0.619) solid;
    width: 120px;
    height: 40px;
    border-radius: 25px;
    color: black;
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
