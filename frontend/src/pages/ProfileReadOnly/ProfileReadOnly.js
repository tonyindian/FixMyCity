import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Main, SaveBox} from './ProfileReadOnlyStyled';
import ProfileDetails from './components/ProfileDetails';
import ProfileMainInfoReadOnly from './components/ProfileMainInfoReadOnly';
import Navigation from '../../components/Navigation/Navigation';
import {fetchProfileInfo} from "../../Axios/fetches"
import { fetchLatestProfileInfoAndUpdateRedux } from "../../middleware/fetchUpdateRedux";


const ProfileReadOnly = (props) => {    
    
    useEffect(() => {              
        const fetchUserInfoAndStoreInState = async () => {    
            const url = window.location.href;
            const userId = url.substring(url.lastIndexOf('/')-1)[0];              
            const data = await fetchProfileInfo(userId);
            console.log(data);                   
            setUserInfo(data);
        }   
        fetchUserInfoAndStoreInState();
    }, []);      
  
    const [showEditMode, toggleShowEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    console.log(userInfo);
    

    return (
        <>
            <Navigation showBackButton={true} page={"profile"}/>
                <Main>
                    {userInfo.id?
                    <ProfileMainInfoReadOnly userInfo = {userInfo} showEditMode={showEditMode}/>
                    :null}                    
                    {showEditMode===false?<div><p>I'll store your issues.</p></div>:null}          
                    <SaveBox></SaveBox>
                </Main>
        </>

    )
}
export default ProfileReadOnly