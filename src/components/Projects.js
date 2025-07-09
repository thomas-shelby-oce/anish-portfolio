import React from 'react';
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: 'Movies App (iOS)',
      description: 'An iOS App in Swift similar to IMDb, showing trending movies based on parameters like week or month, popularity, rating etc. It uses an MVVM Architecture, Table View, and Collection View.',
      image: 'https://via.placeholder.com/300x200',
      demoLink: 'https://drive.google.com/file/d/1PvvqvZa58eQ4GI-deaI2Rlonr1Qnk56o/view',
      githubLink: 'https://github.com/thomas-shelby-oce/Movie-App',
    },
    // Add more projects here if you have them
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <Fade direction="up">
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row justify-content-center">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card bg-dark text-white h-100 shadow-sm">
                  
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-between mt-auto">
                      <a href={project.demoLink} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Demo</a>
                      <a href={project.githubLink} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Projects;