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
                    {/* <p>{reduxProfileData.userName}</p> */}
                    {/* <p>Maximilian</p> */}

                    <h2>First Name:</h2>
                    {/* <p>{reduxProfileData.firstName}</p> */}
                    {/* <p>Max</p> */}

                    <h2>Last Name:</h2>
                    {/* <p>{reduxProfileData.lasteName}</p> */}
                    {/* <p>Meyer</p> */}
                </aside>

                <aside className='right'>
                    <h2>Email:</h2>
                    {/* <p>{reduxProfileData.email}</p> */}
                    {/* <p>max.m@gmail.com</p> */}

                    <h2>Phone number:</h2>
                    {/* <p>{reduxProfileData.phoneNumber}</p> */}
                    {/* <p>+41 76 234 56 78</p> */}

                    <h2>Password:</h2>
                    {/* <p>{reduxProfileData.password}</p> */}
                    {/* <p>.........</p> */}
    
                </aside>
            </UserDetails>
        </>

    )
}
export default ProfileDownPart