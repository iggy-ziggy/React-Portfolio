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
                            <h2 className='title p-2'>{project.title}</h2>
                            <img className='project-image p-2' src={project.image} style={{width: 350, height: 350}}></img>
                            <div className='p-2'><a href={project.github} className='text-decoration-none gh-link'>GitHub</a></div>
                            <div className='p-2'><a href={project.deploy} className='text-decoration-none dep-link'>Deploy</a></div>
                        </li>
                    </ul>
                )
            })}
        </div>
        </div>
    )
}

 
export default Portfolio;