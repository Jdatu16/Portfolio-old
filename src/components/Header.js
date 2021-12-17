import { useContext } from "react";
import { StateContext } from "../App";
import { INFO_PATH, HOME_PATH, Projects_PATH } from "../constants";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import logo from "./../images/logos/logo-white.png";
import logo2 from "./../images/logos/logo-black.png";

export const Header = () => {
  const {
    setProjectsOpen,
    aboutOpen,
    setAboutOpen,
    changeTheme,
    changeLanguage,
    projectsOpen,
    homePageOpen,
    setHomePageOpen,
  } = useContext(StateContext);

  const navigate = useNavigate();

  const toHomePage = () => {
    navigate(HOME_PATH);
    setAboutOpen(false);
    setProjectsOpen(false);
    setHomePageOpen(true);
  };
  const toInfoPage = () => {
    setHomePageOpen(false);
    setProjectsOpen(false);
    navigate(INFO_PATH);
    setAboutOpen(true);
  };
  const toProjectsPage = () => {
    setHomePageOpen(false);
    setProjectsOpen(true);
    setAboutOpen(false);
    navigate(Projects_PATH);
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-container">
          <img
            onClick={() => toHomePage()}
            className="logo"
            src={changeTheme ? logo2 : logo}
            alt="logo"
          />
        </div>
        <div className="header-navigation-container">
          <div className="header-navigation-wrapper">
            {aboutOpen ? (
              <h3 onClick={() => toHomePage()} className="header-navigation">
                {changeLanguage ? "Home" : "მთავარი"}
              </h3>
            ) : (
              <h3 onClick={() => toInfoPage()} className="header-navigation">
                {changeLanguage ? "About" : "ინფორმაცია"}
              </h3>
            )}
          </div>
          <div className="header-navigation-wrapper">
            {projectsOpen ? (
              <h3 onClick={() => toHomePage()} className="header-navigation">
                {changeLanguage ? "Home" : "მთავარი"}
              </h3>
            ) : (
              <h3
                onClick={() => toProjectsPage()}
                className="header-navigation"
              >
                {changeLanguage ? "Projects" : "პროექტები"}
              </h3>
            )}
          </div>
          <div className="header-navigation-wrapper">
            {homePageOpen ? (
              <a href="#contact" className="header-navigation">
                {changeLanguage ? "Contact" : "კონტაქტი"}
              </a>
            ) : (
              <h3 onClick={() => toHomePage()} className="header-navigation">
                {changeLanguage ? "Contact" : "კონტაქტი"}
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
