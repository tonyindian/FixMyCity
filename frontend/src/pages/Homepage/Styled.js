import styled from 'styled-components';

export const Main= styled.div`
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
    display: flex;
    justify-content: center;
    width: 80%;
    height: 80%;
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
    cursor: pointer;

    &:active {
        background-color: grey;
        transform: translateY(4px);
    } 
` 
export const Search = styled.div`
	width: 85%;
    height: 40px;
    border-radius: 25px;
    background-color: white;
	text-align: center;
	border-bottom: 1px solid rgb(206, 206, 206);
	display: flex;
	justify-content: center;
	align-items: center;
	
    input {
        outline: none;
        background-color: white;
        border: none;
    
    }

    img {
        width: 30px;
        height: 30px;
    }

    button {
        background: none;
        outline: none;
        background-color: white;
        border: none;
        margin-left: 30px;
        cursor: pointer;
    }
`

