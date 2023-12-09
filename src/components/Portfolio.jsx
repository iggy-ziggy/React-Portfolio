import React, { Component } from "react";
import projects from "./pages/Portfolio";

function Portfolio() {
  return (
    <div className="portfolio-container">
      {projects.map(function (project, index) {
        return (
          <div className="project-card row mb-4" key={index}>
            <img src={project.image} alt="project image" className="project-image"></img>
            <p className="project-title">{project.title}</p>
            <div className="button-container">
                <a
                  href={project.github}
                  className="button text-decoration-none git-hub-link"
                  style={{ margin: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.deploy}
                  className="button text-decoration-none deploy-link"
                  style={{ margin: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;

{
  /* <div class="portfolio-container">
{projects.map(function(project, index) {
    return (
    <div class="project-card" key={index}>
      <img src={project.image} alt="Image 1" class="project-image">
      <div class="project-title">{project.title}</div>
      <div class="button-container">
      <a href={project.github} className='button text-decoration-none git-hub-link' style={{margin: 10}} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.deploy} className='button text-decoration-none deploy-link' style={{margin: 10}} target="_blank" rel="noopener noreferrer">Deploy</a>
      </div>
    </div>
    )
})}
</div> */
}
