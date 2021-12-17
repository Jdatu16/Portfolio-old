import { useContext } from "react";
import { StateContext } from "../App";

import profilePic from "../images/avatar/profile-white.png";
import profilePic2 from "../images/avatar/profile-dark.png";
import "../css/infoPage.css";

export const Info = () => {
  const { changeTheme, changeLanguage } = useContext(StateContext);
  return (
    <div className="info-page-container">
      <div className="info-page-wrapper">
        <div className="appear flex-row-evenly">
          <div className="profile-picture-div">
            <img
              className="profile-picture"
              src={changeTheme ? profilePic2 : profilePic}
              alt="profile"
            />
          </div>
          <fieldset className="self-description-div">
            <legend>info</legend>
            <div className="fieldset-info">
              {changeLanguage ? "Name" : "სახელი"}:{" "}
              <strong>{changeLanguage ? "Juba" : "ჯუბა"}</strong>
            </div>
            <div className="fieldset-info">
              {changeLanguage ? "Last Name" : "გვარი"}:{" "}
              <strong>
                {changeLanguage ? "Datunaishvili" : "დათუნაიშვილი"}
              </strong>
            </div>
            <div className="fieldset-info">
              <p>
                {changeLanguage ? "Email" : "იმეილი"}:{" "}
                <strong className="no-uppercase">
                  jubadatunaisvhili@gmail.com
                </strong>
              </p>
            </div>
            <div className="fieldset-info">
              <p>
                {changeLanguage ? "country" : "ქვეყანა"}:{" "}
                <strong>{changeLanguage ? "Georgia" : "საქართველო"}</strong>
              </p>
            </div>
            <div className="fieldset-info">
              <p>
                {changeLanguage ? "city" : "ქალაქი"}:{" "}
                <strong>{changeLanguage ? "Tbilisi" : "თბილისი"}</strong>
              </p>
            </div>
          </fieldset>
        </div>
        <div className="appear info-bio-div">
          <p>
            {changeLanguage
              ? "I'm a hard worker, ambitious, and a fast learner. I want to learn as much as possible to enhance my skills as an individual and also as a team worker. I always welcome new challenges and opportunities, that help me to overcome my limits. Have been studying front-end since December of 2020 and will keep it that way."
              : "2020 წლის დეკემბრიდან ვსწავლობ front-end-ს. ვარ შრომისმოყვარე და ამბიციური. ჩემი მიზანია განვვითარდე მაქსიმალურად მოკლე დროში და ვიყო უფრო პროდუქტიული როგორც ინდივიდი, ასევე - გუნდის წევრი. ყოველთვის მივესალმები ისეთ გამოწვევებს, რომლებიც მეხმარება დავძლიო არსებული ლიმიტი."}
          </p>
          <div>
            <div className="social-icons-wrapper">
              <a
                title="Facebook"
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/juba.datunashvili/"
              >
                <i className="social-icons fab fa-facebook-square" />
              </a>
              <a
                title="Github"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Jdatu16"
              >
                <i className="social-icons fab fa-github-square" />
              </a>
              <a
                title="Linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/juba-datunaishvili-301093207/"
              >
                <i className="social-icons fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
