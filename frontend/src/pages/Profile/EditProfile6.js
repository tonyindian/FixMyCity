import React from 'react';
import { FormWrapper, EmailField, SaveButton } from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';


const EditProfile6 = () => {

    return (
        <>
            <Navigation/>
                <FormWrapper> 
                    {/* onSubmit={onHandleSubmit}> */}
                    <h1>Password</h1>
                    <EmailField type='email' required='This field is required'/> 
                    {/* onChange={onUsernameChange} */}
                    <SaveButton type={"submit"}>
                    Save
                    </SaveButton>
                </FormWrapper>

            {/* <PasswordField placeholder='Password' type='password' required='This field is required'/>  */}
               {/* onChange={onPasswordChange} */}
        </>
        
        )
}

export default EditProfile6