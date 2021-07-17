import React from 'react';
import { FormContainer, EmailField, UpdateButton, PContainer } from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';


const EditProfile5 = () => {

    return (
        <>
            <Navigation/>
                <FormContainer> 
                    {/* onSubmit={onHandleSubmit}> */}
                    <h1>Password</h1>
                    <p>Insert your password</p>
                    <EmailField type='email' required='This field is required'/> 
                    {/* onChange={onUsernameChange} */}
                    <PContainer>
                        <p>Password must at least contain 8 characters and one number.</p>
                    </PContainer>
                    <UpdateButton type={"submit"}>
                    Update
                    </UpdateButton>
                </FormContainer>

            {/* <PasswordField placeholder='Password' type='password' required='This field is required'/>  */}
               {/* onChange={onPasswordChange} */}
        </>
        )
}

export default EditProfile5