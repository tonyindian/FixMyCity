import styled from 'styled-components';
import { EmailPasswordField } from "../../globalstyles/Input";
import { ReportButton } from "../../globalstyles/ButtonStyles";
import LastReport from './LastReport1';


export const Main= styled.div`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 7%;
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
    
    h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #E26236;
    }

    p {
        margin-top: 5%;
        font-size: 14px;
        font-weight: 300;
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
        margin-top: 7%;
        margin-bottom: 6%;
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
        margin-top: 7%;
        margin-bottom: 6%;
        }
    }
    
`

export const ProfileDetails = styled.div`
    height: 10%;
    width: 90%;

    h2 {
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        margin-top: 5%;

color: #F8CE46;
    }
`


export const UserDetails = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    
    h2{
        font-weight: bold;
        font-size: 14px;
        margin-top: 7%;
        margin-bottom: 5%;
    }
    
    p {
        margin-bottom: 10%;
        font-size: 12px;
        font-weight: 300;
    }

    .left {
        width: 50%;
        margin-top: 2%;
    }

    .right {
        width: 50%;
        margin-top: 2%;
    }
`

export const SaveBox = styled.div`
    width: 90%;
    height: 7%;
`

export const FormWrapper = styled.form`
    height: 87%;
    display: flex;
    flex-direction: column;
    

    h1 {
        font-size: 30px;
        color: black;
        font-weight: bold;
        margin-top: 50%;
        padding-left: 15%;
    }

`

export const EmailField = styled(EmailPasswordField)`
    border: none;
    outline: none;
    border-bottom: 2px solid grey;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    top: 280px;
`

export const SaveButton = styled(ReportButton)`
    top: 380px;
    font-weight: bold;
    font-size: 18px;
    
    
    :active {
        background: #E26236;
        color: white;
    }
`
export const FormContainer =styled.div`
    height: 87%;
    display: flex;
    flex-direction: column;
    

    h1 {
        font-size: 30px;
        color: black;
        font-weight: bold;
        margin-top: 30%;
        padding-left: 15%;
    }

    p {
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        padding-left: 15%;
        margin-top: 5%;
    }
`

export const PContainer =styled.div`
    width: 50%;
    margin-left: 10%;
    margin-top: 25%;

    p {
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
    }
    
`

export const UpdateButton =styled(ReportButton)`
    top: 380px;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15%;


    :active {
        background: #E26236;
        color: white;
    }
`

export const LastReportContainer =styled.div`
    height: 40%;
    width: 90%;
    display: flex;
    flex-direction: column;

    
`


export const TitleContainer =styled.div`
        width: 90%;

    h1 {
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #F8CE46;
        padding-bottom: 3%;
        border-bottom: solid black 2px;
        
    }
`


export const FetschingContainer =styled.div`
    height: 35%;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid black 2px;
    


    .issue {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
    }
`

export const AddressContainer =styled.p`
    height: 96%;
    width: 49%;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 300;

`

export const ButtonContainer =styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10%;
    width: 90%;
    
    
    button {
        border: none;
        background-color: white;
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        padding-top: 3%;
        text-align: right;
        color: #F8CE46;
      
        &:active {
            transform: translateY(4px);
        }
    }
`

