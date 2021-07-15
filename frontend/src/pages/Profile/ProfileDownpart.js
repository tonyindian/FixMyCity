import React from 'react';
import { UserDetails, ProfileDetails } from './ProfileStyled';



const ProfileDownPart = () => {

    return (
        <>
            <ProfileDetails>
                <h2>Profile Details</h2>
            </ProfileDetails>
            <UserDetails>
                <aside className='left'>
                    <h2>Username:</h2>
                    <p>Maximilian</p>

                    <h2>First Name:</h2>
                    <p>Max</p>

                    <h2>Last Name:</h2>
                    <p>Meyer</p>
                </aside>

                <aside className='right'>
                    <h2>Email:</h2>
                    <p>max.m@gmail.com</p>

                    <h2>Phone number:</h2>
                    <p>+41 76 234 56 78</p>

                    <h2>Password:</h2>
                    <p>.........</p>
    
                </aside>
            </UserDetails>
        </>

    )
}
export default ProfileDownPart