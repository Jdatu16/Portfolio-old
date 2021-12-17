import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AllProjects, Header, HomePage, Info, SidePanel } from "./components";
import { HOME_PATH, INFO_PATH, Projects_PATH } from "./constants";

export const StateContext = React.createContext();
function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [homePageOpen, setHomePageOpen] = useState(false);

  return (
    <div className="main-container">
      <StateContext.Provider
        value={{
          changeTheme,
          setChangeTheme,
          changeLanguage,
          setChangeLanguage,
          setAboutOpen,
          aboutOpen,
          setProjectsOpen,
          projectsOpen,
          setHomePageOpen,
          homePageOpen,
        }}
      >
        <Header />
        <SidePanel />
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={INFO_PATH} element={<Info />} />
          <Route path={Projects_PATH} element={<AllProjects />} />
        </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
