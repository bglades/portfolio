import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-content">
        <h2>Software Engineering Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Easton Class Counter</h3>
            <p>A bookmarklet solution for Easton Training Center to count class attendence. Used throughout nine Easton locations.</p>
            <a href="https://github.com/bglades/eastonClassCounter">View Project</a>
          </div>
          <div className="project">
            <h3>GearLab Playwright Test</h3>
            <p>QA testing for outdoorgearlab.com using automation and written tests.</p>
            <a href="https://github.com/bglades/GearTestPlaywright">View Project</a>
          </div>
          <div className="project">
            <h3>Number Eight</h3>
            <p>Full stack pulmonary toolkit for respiratory healthcare workers with calculators, to do lists, and patient note keeper. </p>
            <a href="https://github.com/bglades/pulmtools">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
