import { useContext } from "react";
import { StateContext } from "../App";
import "../css/header.css";
import logo from "./../images/logo-white.png";
import logo2 from "./../images/logo-black.png";

export const Header = () => {
  const { changeTheme } = useContext(StateContext);
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-container">
          <img className="logo" src={changeTheme ? logo2 : logo} alt="logo" />
        </div>
        <div className="header-navigation-container">
          <div className="header-navigation-wrapper">
            <h3 className="header-navigation">About</h3>
          </div>
          <div className="header-navigation-wrapper">
            <h3 className="header-navigation">Contact</h3>
          </div>
          <div className="header-navigation-wrapper">
            <h3 className="header-navigation">Projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
