import React from 'react';
import { Main, NameContainer, AvatarContainer, StatusConatiner, UserDetails, LastReported, SaveBox} from './ProfileStyled';
import ProfilePic from '../../assets/svgs/profilpic.svg';
import UploadPic from '../../assets/svgs/upload_icon.svg';
import PointsPic from '../../assets/svgs/rating.svg';
import ToolsPic from '../../assets/svgs/tools_color.svg';
import MedalPic from '../../assets/svgs/medal.svg';

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
            <NameContainer>
                <h2>Max Meyer</h2>
                <p>Member since 2021</p>
                {/* <UserProfilePicIcon src={avatar || 'https://via.placeholder.com/50x50'} />
                <NameTitle>{`${first_name} ${last_name}`}</NameTitle> */}
            </NameContainer>

            <AvatarContainer>
                <img alt="profile_avatar" className="avatar" src={ProfilePic}></img>
                <img alt="upload" className="upload" src={UploadPic}></img>
                

            </AvatarContainer>

            <StatusConatiner>
                <aside className='left'>
                    <img alt="points" className="points" src={PointsPic}></img>
                    <p>80 Points</p>
                </aside>

                <div className='middle'>
                    <img alt="tools" className="tools" src={ToolsPic}></img>
                    <p>Level: 2</p>
                </div>

                <aside className='right'>
                    <img alt="medal" className="medal" src={MedalPic}></img>
                    <p>Status: 1</p>
                </aside>
            </StatusConatiner>

            <LastReported></LastReported>

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
            <SaveBox></SaveBox>


            </UserDetails>

            
        </Main>


    )
}
export default Profile