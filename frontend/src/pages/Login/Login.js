import React from "react"
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    height: 90vh;
    width: 100vw;
    background-color: #7cdbd5;
    
    `

const FormWrapper = styled.form`
    display: flex;
    margin-top: 35%;
    justify-content: space-around;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    height: 55vh;
    width: 85vh;
    max-width: 330px;
    border-radius: 28px;
    background-color: #4abdac;
    
    `

/* const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 56px;
    color: white;
    font-family: sans-serif, 'roboto';
    `
 */


const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
    `
const BaseInput = styled.input`
    outline: none;
    margin-bottom: 18px;
    border-radius: 28px;
    padding: 10px 30px;

    ::placeholder {
        font-weight: bold;
        color: grey;
    }
    `

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    `

const LoginButton = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        width: 200px;
        border-radius: 28px;
        border: none;
        background-color: #F53240;
        color: white;
        font-size: 28px;
        `

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const history = useHistory();

const onUsernameChange = (event) => {
    setEmail(event.target.value);
};

const onPasswordChange = (event) => {
    setPassword(event.target.value);
};

const onHandleSubmit = async (e) => {
    e.preventDefault();

    const url = "auth/token/";
    const body = {
        email: email,
        password: password,
    };


    try {
        const resp = await Axios.post(url, body);
        if (resp.status === 200) {
            setEmail("");
            setPassword("");

            dispatch({
                type: 'auth/login',
                payload: resp.data,
            });

            localStorage.setItem("token", resp.data.access);
            history.push("/");
        }
    } catch (err) {
        if (err.response.status > 400) {
            console.log(err.response);
        }
    }
};


return (
    <Container>
    <FormWrapper onSubmit={onHandleSubmit}>
        <InputWrapper>
            <BaseInput placeholder='Email' type='email' required='This field is required' onChange={onUsernameChange}/>
            <BaseInput placeholder='Password' type='password' required='This field is required' onChange={onPasswordChange}/>
        </InputWrapper>
        <ButtonWrapper>
            <LoginButton type={"submit"}>
                Login
            </LoginButton>
        </ButtonWrapper>
    </FormWrapper>
    </Container>
)
}

export default Login;
