import React from 'react';
import {NameContainer, AvatarContainer, StatusConatiner } from './ProfileStyled';
import ProfilePic from '../../assets/svgs/profilpic.svg';
import UploadPic from '../../assets/svgs/upload.svg';
import PointsPic from '../../assets/svgs/rating.svg';
import ToolsPic from '../../assets/svgs/tools_color.svg';
import MedalPic from '../../assets/svgs/medal.svg';



const ProfileUperpart = () => {

return (
    <>
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
                    <img alt="points" src={PointsPic}></img>
                    <p>80 Points</p>
                </aside>

                <div className='middle'>
                    <img alt="tools" src={ToolsPic}></img>
                    <p>Level: 2</p>
                </div>

                <aside className='right'>
                    <img alt="medal" src={MedalPic}></img>
                    <p>Status: 1</p>
                </aside>
            </StatusConatiner>
        </>
)

}

export default ProfileUperpart
