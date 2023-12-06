import React, { Component } from 'react';
import projects from './pages/Portfolio';


function Portfolio() {
    return (
        <div className='portfolio-container'>
            <div className='row mb-4'>
                {projects.map(function(project, index) {
                    return (
                        <ul className='col mx-4 project-item' key={index}>
                            <li>
                                
                                <img className='project-image p-2' src={project.image}></img>
                                <h2 className='project-title p-2'>{project.title}</h2>
                                <a href={project.github} className='text-decoration-none git-hub-link' style={{margin: 10}}>GitHub</a>
                                <a href={project.deploy} className='text-decoration-none deploy-link' style={{margin: 10}}>Deploy</a>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

 
export default Portfolio;