import React from 'react';
import {NameContainer, IssueContainer, StatusConatiner } from './ProfileStyled';
import ProfilePic from '../../assets/svgs/profilpic.svg';
import UploadPic from '../../assets/svgs/upload_black.svg';
import PointsPic from '../../assets/svgs/rating.svg';
import ToolsPic from '../../assets/svgs/tools_color.svg';
import MedalPic from '../../assets/svgs/medal.svg';



const ProfileUpperPart = () => {

return (
    <>
        <NameContainer>
        <aside className='left'>
            <img alt="profile_avatar" className="avatar" src={ProfilePic}></img>
            {/* <img alt="upload" className="upload" src={UploadPic}></img> */}
        </aside>
        <aside className='right'>
            <h1>Max Meyer</h1>
            <p>Member since 12.02.2021</p>
        </aside>  
        </NameContainer>

            <StatusConatiner>
                <aside className='left'>
                    {/* <img alt="points" src={PointsPic}></img> */}
                    <p>Points</p>
                    <p className='blackP'>280</p>
                </aside>

                <div className='middle'>
                    {/* <img alt="tools" src={ToolsPic}></img> */}
                    <p>Level</p>
                    <p className='blackP'>Hero</p>
                </div>

                <aside className='right'>
                    {/* <img alt="medal" src={MedalPic}></img> */}
                    <p>Status</p> 
                    <p className='blackP'>1</p>
                </aside> 
            </StatusConatiner>

            <IssueContainer>
            <aside className='left'>
                <h2>Issues reported</h2>
                <h2>Issues upvoted</h2>
            </aside>
            <aside className='right'>
                <h2>32</h2>
                <h2>47</h2>
            </aside>
            </IssueContainer>
        </>
)

}

export default ProfileUpperPart
