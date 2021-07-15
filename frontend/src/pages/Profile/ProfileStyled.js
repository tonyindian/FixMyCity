import styled from 'styled-components';


export const Main= styled.div`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`

export const NameContainer = styled.div`
    width: 90%;
    height: 28%;
    margin-top: 2%;
    color: black;
    display: flex;
    justify-content: start;
    margin-top: 0%;

    .left {
        width: 35%;
        margin-top: 5%;
    }

    .right {
        margin-top: 15%;
    }
    
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #E26236;
    }

    p {
        margin-top: 0%;
    }

    .avatar {
        height: 90%;
        width: 90%;
        padding-top: 0%;
        padding-right: 1%;
    }

    .upload {
        height: 30%;
        width: 30%;
        padding-top: 18%;
        padding-right: 20%;
    }
`

export const StatusConatiner = styled.div`
    width: 90%;
    height: 12%;
    display: flex;
    
    
    
    img {
        width: 35%;
        height: 50%;
    }
    
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 28px;
        color: #E26236;
    }
    .blackP {
        color: black;
    }

    .left {
        width: 35%;
    }

    .middle {
        width: 33%;
    }

    .right {
        width: 32%;
    }
`

export const IssueContainer = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    
    .left {
        width: 50%;

        h2 {
        color: #E26236;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        margin-top: 5%;
        margin-bottom: 4%;
    }
    }
    
    .right {
        width: 50%;
        h2 {
        color: black;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        margin-top: 5%;
        margin-bottom: 4%;
        }
    }
    
`


export const UserDetails = styled.div`
    border: 2px solid blue;
    width: 90%;
    height: 40%;
    display: flex;
    
    p {
        color: white;
        padding-left: 10%;
        margin-bottom: 2%;
    }

    .left {
    }

    .right {
    }


    input {
        width: 90%;
        height: 27px;
        border-radius: 25px;
        background-color: white;
        text-align: center;
        border-bottom: 1px solid rgb(206, 206, 206);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 4%;
    }
`

export const SaveBox = styled.div`
    border: 2px solid pink;
    width: 90%;
    height: 7%;
`