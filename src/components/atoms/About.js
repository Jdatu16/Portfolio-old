import { useContext } from "react";
import { StateContext } from "../../App";
import profilePic from "../../images/avatar/profile-white.png";
import profilePic2 from "../../images/avatar/profile-dark.png";

export const About = () => {
  const { changeTheme, changeLanguage } = useContext(StateContext);

  return (
    <div id="about" className="about-container">
      <div className="about-picture-container">
        <img src={changeTheme ? profilePic2 : profilePic} alt="profile" />
      </div>
      <div className="about-bio-container">
        <div className="bio">
          <h3 className="introduction">
            {changeLanguage ? "My name is Juba," : "მე მქვია ჯუბა,"}
            <br />
            {changeLanguage ? "I'm a React Developer" : "ვარ React დეველოპერი"}
          </h3>
        </div>

        <div className="bio">
          <p>
            {changeLanguage
              ? "Here You can get to know me a little. On this page, You will find some of my projects, as well as the ways to contact me. Also, feel free to change color and language by clicking the arrow button on the left top side of the screen."
              : "აქ შეძლებ ჩემს შესახებ ზოგადი წარმოდგენის შექმნას. გექნება საშუალება ნახო ჩემი პროექტები და დამიკავშირდე, თუ გექნება სურვილი. "}
          </p>
        </div>
      </div>
    </div>
  );
};
