import React from 'react';

const WriterProjects = () => {
  return (
    <section id="projects">
      <div className="projects-content">
        <h2>Technical Writer Samples</h2>
        <div className="project-list">
          <div className="project">
            <h3>BioMedi Grant Proposal</h3>
            <p>A grant proposal for a Biotech lab that studies Cystic Fibrosis.</p>
            <a href="https://docs.google.com/document/d/1HVsS8r7QkauxTV29WfyafTuIoInnmmaEwVlws-_0Lvk/edit?usp=sharing">View Project</a>
          </div>
          <div className="project">
            <h3>CardioBliss</h3>
            <p>An informational guide to the fictional medication CardioBliss.</p>
            <a href="https://docs.google.com/document/d/1ESF5yHm4sM5v68qrfMG-jPmGQo5fLnmV46Fe_3dLxzo/edit?usp=sharing">View Project</a>
          </div>
          <div className="project">
            <h3>Easton Class Counter Documentation</h3>
            <p>Guide to using the class counter bookmarklet mentioned above. </p>
            <a href="https://docs.google.com/document/d/1VQUSA_RLISYzvM8kuIbOothLbSro9u3IlqbXdpbL97c/edit?usp=sharing">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriterProjects;
