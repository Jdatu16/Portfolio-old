import React, { useState } from "react";
import { Contact, Header, HomePage, SidePanel, Projects } from "./components";

export const StateContext = React.createContext();
function App() {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <div className="main-container">
      <StateContext.Provider value={{ changeTheme, setChangeTheme }}>
        <SidePanel />
        <Header />
        <HomePage />
        <Projects />
        <Contact />
      </StateContext.Provider>
    </div>
  );
}

export default App;
