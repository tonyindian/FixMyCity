import React from 'react';
import { FormWrapper, EmailField, SaveButton } from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Axios from "../../Axios/index";




const EditProfile1 = () => {

    return (
        <>
            <Navigation/>
                <FormWrapper> 
                    {/* onSubmit={onHandleSubmit}> */}
                    <h1>Username</h1>
                    <EmailField type='email' required='This field is required'/> 
                    {/* onChange={onUsernameChange} */}
                    <SaveButton type={"submit"}>
                    Save
                    </SaveButton>
                </FormWrapper>
    
        </>
    )
}

export default EditProfile1