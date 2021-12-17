import { useContext } from "react";
import { StateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { LATEST_PROJECTS as projectsArr } from "../../constants/projectsArr";
import { Projects_PATH } from "../../constants/";

import "../../css/projects.css";

export const Projects = () => {
  const { changeLanguage, setProjectsOpen, setHomePageOpen, setAboutOpen } =
    useContext(StateContext);
  const navigate = useNavigate();
  const toAllProjects = () => {
    setHomePageOpen(false);
    setProjectsOpen(true);
    setAboutOpen(false);
    navigate(Projects_PATH);
  };

  return (
    <div id="projects" className="projects-container">
      <div className="description">
        <h3>{changeLanguage ? "Latest Projects" : "ახალი პროექტები"}</h3>
      </div>
      <div className="projects-wrapper">
        {projectsArr.map(({ name, img, source, server, id }) => {
          return (
            <article key={id} className="project">
              <img className="project-images" src={img} alt="project" />
              <h4 className="project-title">
                {changeLanguage ? "Project Name:" : "პროექტის სახელი:"} {name}
              </h4>
              <div className="project-links">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                  href={server}
                >
                  <i className="fas fa-tv">
                    {" "}
                    {changeLanguage ? " Live" : " ნახვა"}
                  </i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                  href={source}
                >
                  <i className="fas fa-code">
                    {" "}
                    {changeLanguage ? " Source" : " კოდი"}
                  </i>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p onClick={() => toAllProjects()} className="all-projects">
        {changeLanguage ? " all projects" : " სრული სია"}{" "}
        <i className="fas fa-angle-double-right"></i>
      </p>
    </div>
  );
};
