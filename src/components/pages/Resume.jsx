// export default function Resume() {
//   return (
//     <div>
//       <h2 className="title">Resume</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
//         necessitatibus quae rerum impedit delectus! Laboriosam quos natus
//         molestias. Dolores, sapiente sed perspiciatis consequatur reiciendis
//         debitis quos labore eius molestiae repudiandae deserunt omnis sunt
//         error, quis quia blanditiis inventore est amet. Odit sed iusto
//         reiciendis obcaecati commodi atque architecto omnis mollitia laudantium
//         aliquam tenetur enim consequatur, eligendi, ipsum hic delectus fugiat.
//         Nesciunt impedit totam, nostrum neque ipsa, dignissimos debitis commodi
//         aut eum consequuntur eligendi inventore laudantium. Nihil, aliquid!
//         Maiores perspiciatis impedit eligendi quas cumque quod doloremque fuga
//         maxime a ab consequuntur saepe deserunt fugiat sed, nihil eaque optio
//         inventore ratione iure.
//       </p>
//     </div>
//   );
// }

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
                    <li className="skills-item">{skill.name}</li>
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
