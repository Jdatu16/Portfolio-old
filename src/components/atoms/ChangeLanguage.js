import { useContext } from "react";
import { StateContext } from "../../App";
import englishIcon from "../../images/buttons/english.png";
import georgianIcon from "../../images/buttons/georgian.png";

export const ChangeLanguage = () => {
  const { changeLanguage, setChangeLanguage } = useContext(StateContext);
  const toggleChange = () => {
    setChangeLanguage((prev) => !prev);
  };

  return (
    <div className="theme-audio-icons" onClick={toggleChange}>
      <img
        alt="georgian flag"
        src={georgianIcon}
        className={changeLanguage ? "icon-appear" : "disappear"}
      />
      <img
        alt="english flag"
        src={englishIcon}
        className={changeLanguage ? "disappear " : "icon-appear "}
      />
    </div>
  );
};
