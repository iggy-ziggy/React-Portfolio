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
        <h1 className="title">Skills</h1>
        <div className="skills-container">
          <div className="d-flex container-fluid p-5 skills-list">
            <div className="row mb-4">
              {skills.map(function (skill, index) {
                return (
                  <ul className="col mx-4" key={index}>
                    <i className={skill.name}></i>                    
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <button
          className="btn-warning rounded-pill resume-btn"
          onClick={onButtonClick}
        >
          Download Resume
        </button>
      </center>
    </>
  );
};

export default Resume;
