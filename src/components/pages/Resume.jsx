import React from "react";
import skills from "./Skills";
import tech from "./Tech";


const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("matthew-haynes-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "matthew-haynes-resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
      <button
          className="rounded-pill btn-warning resume-btn"
          onClick={onButtonClick}
        >
          Download Resume
        </button>
        <h1 className="tech-title">Technologies</h1>
        <div className="tech-container">
              <ul className="row mb-4 tech-list">
              {tech.map(function (tech, index) {
                return (
                  <li className="col mx-4 tech-li" key={index}>
                    <i className={tech.name} id="tech-item"></i>
                    <p className="tech-item-title">{tech.title}</p>                   
                  </li>
                );
              })}
              </ul>
        </div>
        <div className="skills-container">
              <h1 className="skills-title">Skills</h1>
              <ul className="row mb-4 skills-list">
              {skills.map(function (skills, index) {
                return (
                  <li className="col mx-4 skills-li" key={index}>
                    {skills.name}                   
                  </li>
                );
              })}
              </ul>
        </div>
      </center>
    </>
  );
};

export default Resume;
