import React, { Component } from 'react';
import projects from './pages/Portfolio';


function Portfolio() {
    return (
        <div className='container-fluid'>
        <div className='row mb-4'>
            {projects.map(function(project) {
                return (
                    <ul className='col mx-4' key={project.id}>
                        <li>
                            <h4 className='title'>{project.title}</h4>
                            <img className='project-image' src={project.image} style={{width: 250, height: 250}}></img>
                            <div><a href={project.github} className='text-decoration-none gh-link'>GitHub</a></div>
                            <div><a href={project.deploy} className='text-decoration-none dep-link'>Deploy</a></div>
                        </li>
                    </ul>
                )
            })}
        </div>
        </div>
    )
}

 
export default Portfolio;