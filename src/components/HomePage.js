import { About, Contact, Projects } from "./atoms";

export const HomePage = ({ setAboutOpen }) => {
  return (
    <div className="content-container">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
