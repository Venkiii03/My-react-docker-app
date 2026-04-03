import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Brand Identity', category: 'Creative', imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Digital Platform', category: 'Development', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Marketing Campaign', category: 'Strategy', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Social Content', category: 'Social', imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section className="projects-section section-padding container" id="studio">
      <div className="section-header text-center reveal">
        <h2 className="title">Our recent <span className="underline-orange">projects</span></h2>
        <p className="subtitle">A selection of work that pushed boundaries.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card reveal reveal-${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-image-placeholder">
              <img src={project.imageUrl} alt={project.title} className="project-img" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="pill-pink">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
