import { useContext } from "react";
import { StateContext } from "../../App";
import { changeColors } from "../../tools";

export const ThemeChanger = () => {
  const { changeTheme, setChangeTheme } = useContext(StateContext);

  const toggleTheme = () => {
    setChangeTheme((prev) => !prev);

    changeColors(changeTheme);
  };

  return (
    <div className="theme-audio-icons" onClick={toggleTheme}>
      <i
        className={
          changeTheme ? "icon-appear fas fa-sun" : "disappear fas fa-sun"
        }
      />
      <i
        className={
          changeTheme ? "disappear fas fa-moon" : "icon-appear fas fa-moon"
        }
      />
    </div>
  );
};
