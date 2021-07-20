import React from "react";
import { Main, UserDetails, LastReported, SaveBox } from "./ProfileStyled";
import ProfileDownPart from "./ProfileDownpart";
import ProfileUpperPart from "./ProfileUpperPart";
import Navigation from "../../components/Navigation/Navigation";

const Profile = (props) => {
  // const UserProfileFullCard = ({ meData, getMyProfileAction, history }) => {
  //     const { last_name, first_name, avatar, location, about_me, email, phone, things_user_likes } = meData;

  //     useEffect(() => {
  //         getMyProfileAction();
  //     }, [getMyProfileAction]);

  //     const editHandler = function () {
  //         history.push('/userProfileUpdate')
  //     };

  return (
    <>
      <Navigation />
      <Main>
        <ProfileUpperPart />

        <ProfileDownPart />

        <SaveBox></SaveBox>
      </Main>
    </>
  );
};
export default Profile;
