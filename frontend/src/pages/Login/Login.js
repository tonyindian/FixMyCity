import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";
import { EmailPasswordField } from "../../globalstyles/Input";
import { LoginSignUpButton } from "../../globalstyles/ButtonStyles";
import fixmycitylogo from "../../assets/svgs/fixmycitylogonew.svg";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  height: 90vh;
  width: 100vw;
  background-color: white;
`;

const FormWrapper = styled.form`
  display: flex;
  margin-top: 35%;
  justify-content: space-around;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 220px;
  height: 52px;
  left: 64px;
  top: 229px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  color: #000000;
`;

const LogoWrapper = styled.div`
  position: absolute;
  width: 140px;
  height: 87.18px;
  left: 64px;
  top: 74px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1vh;
`;

const EmailField = styled(EmailPasswordField)`
  position: absolute;
  width: 254px;
  height: 51px;
  left: 64px;
  top: 361px;
`;
const PasswordField = styled(EmailPasswordField)`
  position: absolute;
  width: 254px;
  height: 51px;
  left: 64px;
  top: 459px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled(LoginSignUpButton)``;

const Login = () => {
  const token = useSelector((state) => state.tokenReducer.token);
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
          type: "getToken",
          payload: resp.data.access,
        });

        localStorage.setItem("token", resp.data.access);
      }
    } catch (err) {
      if (err.response.status > 400) {
        console.log(err.response);
      }
    }
  };

  useEffect(() => {
    if (token) history.push("/");
  }, [token]);

  return (
    <Container>
      <LogoWrapper>
        <img src={fixmycitylogo} alt="logo" />
      </LogoWrapper>
      <TitleWrapper>
        Welcome <br />
        back.
      </TitleWrapper>
      <FormWrapper onSubmit={onHandleSubmit}>
        <InputWrapper>
          <EmailField
            placeholder="Email"
            type="email"
            required="This field is required"
            onChange={onUsernameChange}
          />
          <PasswordField
            placeholder="Password"
            type="password"
            required="This field is required"
            onChange={onPasswordChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton type={"submit"}>Login</LoginButton>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Login;
