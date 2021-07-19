import React, { useState } from "react";
import { MainContainer, MenuStyled } from "./NavigationStyled";
import MenuImage from "../../assets/images/menu.png";
import leftArrow from "../../assets/images/left-arrow-navigation.png";
import { useHistory } from "react-router-dom";

export const Menu = (props) => {
  
  const history = useHistory();


  const goToProfileOnClickHandler = () =>{
    history.push("/profile");
    props.toggleShowMenu(false);
  }

  const goToHomeOnClickHandler = () =>{
    history.push("/");
    props.toggleShowMenu(false);
  }

  const goToIssuesOnClickHandler = () =>{
    console.log("no issues page yet ;)")
    props.toggleShowMenu(false);
  }


  return (
    <MenuStyled>
      <button className="menuOption" onClick={goToHomeOnClickHandler}>HOME</button>
      <button className="menuOption" onClick={goToProfileOnClickHandler}>PROFILE</button>
      <button className="menuOption" onClick={goToIssuesOnClickHandler}>ISSUES</button>
    </MenuStyled>
  );
};

const Navigation = (props) => {
  const [showMenu, toggleShowMenu] = useState(false);
  const history = useHistory();
  
  const menuIconOnClickHandler = () => {
    toggleShowMenu(!showMenu);
  };

  const backButtonOnClickHandler = () => {
    switch (props.page) {
      case "MoreDetails":
        props.setToggleMoreDetails(false);
        break;
      case "editProfileField":
        props.setShowEditProfileField(false);  
        break;
      case "profile":
        history.push("/");     
        break; 
      default:
        break;
    }
  };

  return (
    <>
      <MainContainer position={props.position}>
        {props.showBackButton ? (
          <button id="back" onClick={backButtonOnClickHandler}>
            <img id="leftArrow" src={leftArrow} alt="left_arrow"></img>
          </button>
        ) : null}
        <button id="menu" onClick={menuIconOnClickHandler}>
          <img id="menu_img" src={MenuImage} alt="menu_icon"></img>
        </button>
      </MainContainer>
      {showMenu && <Menu toggleShowMenu={toggleShowMenu}/>}
    </>
  );
};

export default Navigation;
