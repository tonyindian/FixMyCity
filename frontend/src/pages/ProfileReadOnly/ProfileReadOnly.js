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
            const data = await fetchProfileInfo(props.match.params.id);
            console.log(data);                   
            setUserInfo(data);
        }   
        fetchUserInfoAndStoreInState();
    }, []);    

    
  


    const [showEditMode, toggleShowEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState("");
    console.log(userInfo);
    

    return (
        <>
            <Navigation showBackButton={true} page={"profile"}/>
                <Main>
                    {userInfo?
                    <ProfileMainInfoReadOnly userInfo = {userInfo} showEditMode={showEditMode}/>
                    :null}
                    {showEditMode===true?<ProfileDetails userInfo = {userInfo} />:null}
                    {showEditMode===false?<div><p>I'll store your issues.</p></div>:null}          
                    <SaveBox></SaveBox>
                </Main>
        </>

    )
}
export default ProfileReadOnly