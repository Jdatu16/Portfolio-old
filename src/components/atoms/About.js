import { useContext } from "react";
import { StateContext } from "../../App";
import profilePic from "../../images/profile-white.png";
import profilePic2 from "../../images/profile-dark.png";

export const About = () => {
  const { changeTheme } = useContext(StateContext);

  return (
    <div className="about-container">
      <div className="about-picture-container">
        <img src={changeTheme ? profilePic2 : profilePic} alt="profile" />
      </div>
      <div className="about-bio-container">
        <div className="bio">
          <h3 className="introduction">
            my name is Juba <br />
            i'm a react Developer
          </h3>
        </div>

        <div className="bio">
          <p>
            I'm a hard worker, ambitious and a fast learner. I want to learn as
            much as possible to enhance my skills as an individual and also as a
            team worker. I always welcome new challenges.
          </p>
        </div>
      </div>
    </div>
  );
};
