import React from "react";
import skills from "./Skills";


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
          className="rounded-pill resume-btn"
          onClick={onButtonClick}
        >
          Download Resume
        </button>
        <h1 className="skills-title">Skills</h1>
        <div className="skills-container">
              <ul className="row mb-4 skills-list">
              {skills.map(function (skill, index) {
                return (
                  <li className="col mx-4 skills-li" key={index}>
                    <i className={skill.name} id="skill-item"></i>
                    <p className="skill-title">{skill.title}</p>                   
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
