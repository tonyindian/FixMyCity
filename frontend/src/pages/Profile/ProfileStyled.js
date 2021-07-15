import styled from 'styled-components';

export const Main= styled.div`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    /* background: #7cdbd5; */

`

export const NameContainer = styled.div`
    border: 2px solid red;
    width: 90%;
    height: 12%;
    margin-top: 2%;
    color: white;
    
    h2 {
        margin-top: 0%;
        margin-bottom: 0%;
    }

    p {
        margin-top: 0%;
    }
`

export const AvatarContainer = styled.div`
    border: 2px solid green;
    width: 90%;
    height: 17%;
    display: flex;
    justify-content: center;
    margin-top: 0%;

    .avatar {
        height: 100%;
        width: 100%;
        padding-top: 0%;
        padding-left: 30%;
        padding-right: 1%;
        /* border-radius: 60 / 2;
        overflow: "hidden";
        border-width: 3;
        border-color: "red"; */
    }

    .upload {
        height: 30%;
        width: 30%;
        padding-top: 18%;
        padding-right: 20%;
    }
    
`
export const StatusConatiner = styled.div`
    border: 2px solid yellow;
    width: 90%;
    height: 12%;
    display: flex;
    
    
    img {
        width: 35%;
        height: 50%;
    }
    
    p {
        color: white;
        margin: 0%;
    }

    .left {
        margin-left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .middle {
        margin-left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .right {
        margin-left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const LastReported = styled.div`
    /* border: 2px solid purple; */
    width: 90%;
    height: 5%;

`

export const UserDetails = styled.div`
    /* border: 2px solid yellow; */
    width: 90%;
    height: 39%;
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
    /* border: 2px solid pink; */
    width: 90%;
    height: 7%;
`