import React, { Component } from 'react';
import projects from './pages/Portfolio';


function Portfolio() {
    return (
        <div className='portfolio-container'>
            <div className='container-fluid'>
            <div className='row mb-4'>
                {projects.map(function(project, index) {
                    return (
                        <ul className='col mx-4' key={index}>
                            <li>
                                
                                <img className='project-image p-2' src={project.image} style={{width: 350, height: 350}}></img>
                                <h2 className='title p-2'>{project.title}</h2>
                                <a href={project.github} className='text-decoration-none gh-link' style={{margin: 10}}>GitHub</a>
                                <a href={project.deploy} className='text-decoration-none dep-link' style={{margin: 10}}>Deploy</a>
                            </li>
                        </ul>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

 
export default Portfolio;