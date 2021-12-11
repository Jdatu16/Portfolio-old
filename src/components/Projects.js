import { NavLink } from "react-router-dom";
import { LATEST_PROJECTS as projectsArr } from "../constants/projectsArr";

import "../css/projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="description">
        <h3>Latest Pojects</h3>
      </div>
      <div className="projects-wrapper">
        {projectsArr.map(({ name, img, source, server, id }) => {
          return (
            <article key={id} className="project">
              <img className="project-images" src={img} alt="project" />
              <h4 className="project-title">project name: {name}</h4>
              <div className="project-links">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                  href={server}
                >
                  <i className="fas fa-tv"> Live</i>
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                  href={source}
                >
                  <i className="fas fa-code"> Source</i>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <NavLink to="/" className="all-projects">
        all projects <i className="fas fa-angle-double-right"></i>
      </NavLink>
    </div>
  );
};
