import { useContext } from "react";
import { StateContext } from "../../App";
import { cssVarsAfter, cssVarsInit } from "../../constants/";

export const ThemeChanger = () => {
  const { changeTheme, setChangeTheme } = useContext(StateContext);

  const toggleTheme = () => {
    setChangeTheme((prev) => !prev);

    if (changeTheme) {
      cssVarsInit.map(({ name, value }) => {
        console.log(value);
        return document.documentElement.style.setProperty(name, value);
      });
    } else if (!changeTheme) {
      cssVarsAfter.map(({ name, value }) => {
        return document.documentElement.style.setProperty(name, value);
      });
    }
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
