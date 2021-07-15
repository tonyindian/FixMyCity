import React from 'react';
import { UserDetails } from './ProfileStyled';



const ProfileDownpart = () => {

    return (
        <>
            <UserDetails>
                <aside className='left'>
                    <p>Username:</p>
                    <input type="text"/>

                    <p>First Name:</p>
                    <input type="text"/>

                    <p>Last Name:</p>
                    <input type="text"/>
                </aside>

                <aside className='right'>
                    <p>Email:</p>
                    <input type="text"/>

                    <p>Phone number:</p>
                    <input type="text"/>

                    <p>Password:</p>
                    <input type="text"/>
                </aside>
            </UserDetails>
        </>

    )
}
export default ProfileDownpart