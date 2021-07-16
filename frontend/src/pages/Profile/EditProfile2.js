import React from 'react';
import { FormWrapper, EmailField, SaveButton } from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';


const EditProfile2 = () => {

    return (
        <>
            <Navigation/>
                <FormWrapper> 
                    {/* onSubmit={onHandleSubmit}> */}
                    <h1>First Name</h1>
                    <EmailField type='email' required='This field is required'/> 
                    {/* onChange={onUsernameChange} */}
                    <SaveButton type={"submit"}>
                    Save
                    </SaveButton>
                </FormWrapper>
        </>
        )
}

export default EditProfile2