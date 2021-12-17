import React, { useState } from "react";
import { PlaySound } from "./atoms/PlaySound";
import "../css/sidePanel.css";
import { ChangeLanguage, ThemeChanger } from "./atoms";

export const SidePanel = () => {
  const [sidePanelToggled, setSidePanelToggled] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelToggled((prev) => !prev);
  };

  return (
    <div
      className={
        sidePanelToggled
          ? "sidepanel-open sidePanel-container"
          : "sidepanel-closed sidePanel-container"
      }
    >
      <div className="sidepanel-wrapper">
        <div
          className={
            sidePanelToggled
              ? "sidepanel-top-side"
              : "sidepanel-top-side disappear"
          }
        >
          <PlaySound />
          <ChangeLanguage />
          <ThemeChanger />
        </div>
        <div className="sidepanel-bottom-side">
          <i
            onClick={toggleSidePanel}
            className={
              sidePanelToggled ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
          />
        </div>
      </div>
    </div>
  );
};
