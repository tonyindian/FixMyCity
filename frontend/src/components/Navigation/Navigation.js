import React, { useState } from "react";
import { MainContainer, MenuStyled } from "./NavigationStyled";
import MenuImage from "../../assets/images/menu.png";
import leftArrow from "../../assets/images/left-arrow-navigation.png";

export const Menu = () => {
  return (
    <MenuStyled>
      <button className="menuOption">HOME</button>
      <button className="menuOption">PROFILE</button>
      <button className="menuOption">ISSUES</button>
    </MenuStyled>
  );
};

const Navigation = (props) => {
  const [showMenu, toggleShowMenu] = useState(false);

  const menuIconOnClickHandler = () => {
    toggleShowMenu(!showMenu);
  };

  const backButtonOnClickHandler = () => {
    console.log("you clicked me!");
    switch (props.page) {
      case "MoreDetails":
        props.setToggleMoreDetails(false);
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
      {showMenu && <Menu />}
    </>
  );
};

export default Navigation;
