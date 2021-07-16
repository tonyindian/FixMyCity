import React from 'react';
import { FormWrapper, EmailField, SaveButton } from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';



const EditProfile4 = () => {

    return (
        <>
            <Navigation/>
                <FormWrapper> 
                    {/* onSubmit={onHandleSubmit}> */}
                    <h1>Email</h1>
                    <EmailField type='email' required='This field is required'/> 
                    {/* onChange={onUsernameChange} */}
                    <SaveButton type={"submit"}>
                    Save
                    </SaveButton>
                </FormWrapper>
        </>
        )
}

export default EditProfile4