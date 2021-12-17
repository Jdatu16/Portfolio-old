import { useContext } from "react";
import { StateContext } from "../App";
import { ALL_PROJECTS } from "../constants/projectsArr";

import "../css/allProjectsPage.css";

export const AllProjects = () => {
  const { changeLanguage } = useContext(StateContext);

  return (
    <div className="all-projects-container">
      <div className="all-projects-wrapper">
        <div className="all-projects-list">
          {ALL_PROJECTS.map(({ name, img, source, server, id }) => {
            return (
              <article key={id} className="appear single-project">
                <img className="all-projects-images" src={img} alt="project" />
                <h4 className="projects-title">
                  {changeLanguage ? "Project Name:" : "პროექტის სახელი:"} {name}
                </h4>
                <div className="projects-links">
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
      </div>
    </div>
  );
};
