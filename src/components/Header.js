import "../css/header.css";
import logo from "./../images/logo-white.png";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
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
