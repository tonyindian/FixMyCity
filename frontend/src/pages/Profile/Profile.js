import React from 'react';
import { Main, UserDetails, LastReported, SaveBox} from './ProfileStyled';
import ProfileDownpart from './ProfileDownpart';
import ProfileUperpart from './ProfileUperpart';


const Profile = () => {

    // const UserProfileFullCard = ({ meData, getMyProfileAction, history }) => {
    //     const { last_name, first_name, avatar, location, about_me, email, phone, things_user_likes } = meData;
    
    //     useEffect(() => {
    //         getMyProfileAction();
    //     }, [getMyProfileAction]);
    
    //     const editHandler = function () {
    //         history.push('/userProfileUpdate')
    //     };
    
    return (
        <Main>
            <ProfileUperpart/>

            <LastReported></LastReported>

            <ProfileDownpart/>
            
            <SaveBox></SaveBox>
        </Main>


    )
}
export default Profile