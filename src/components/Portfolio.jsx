import React, { Component } from 'react';
import projects from './pages/Portfolio';


function Portfolio() {
    return (
        <>
        {projects.map(function(project) {
            return (
                <ul key={project.id}>
                    <li>
                        <h4>Title: {project.title}</h4>
                        <p>Image: {project.image}</p>
                        <p>GitHub: {project.github}</p>
                        <p>Deploy: {project.deploy}</p>
                    </li>
                </ul>
            )
        })}
        </>
    )
}

 
export default Portfolio;