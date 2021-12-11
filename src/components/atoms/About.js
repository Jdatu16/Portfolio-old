import profilePic from "../../images/profile-white.png";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-picture-container">
        <img src={profilePic} alt="profile" />
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
