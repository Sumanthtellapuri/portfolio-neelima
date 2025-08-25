import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Projects Page",
    description:
      "Developed an online showcase of an individual's projects for interviewer assessment. Crafted the banner segment and project cards with different HTML elements and styled them using CSS3 with flexbox, backgrounds, box model properties, and both relative and absolute units.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://neelima39prjpg.ccbp.tech",
    github: "",
    image: "https://picsum.photos/400/200?random=1",
    icon: "📱"
  },
  {
    title: "Amazon Sales Report",
    description:
      "Created a Power BI dashboard representing Amazon sales data to analyze trends and patterns over time. Included insights on promotions, holidays, and peak sales periods to empower data-driven decisions for revenue growth.",
    tech: ["Power BI", "Data Viz", "Analytics"],
    live: "https://drive.google.com/file/d/1q96-ngMovieData/view?usp=sharing",
    github: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    icon: "📊"
  },
  {
    title: "Movie Data Report",
    description:
      "Developed a Power BI dashboard to analyze and visualize movie viewership trends. Provided insights on peak viewing periods, season premieres, and retention across different movies using line and column charts.",
    tech: ["Power BI", "Analytics", "Visualization"],
    live: "https://drive.google.com/file/d/1URhEXXoINgkyNjyfvC1T4ovvzdd9zXP4/view?usp=sharing",
    github: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Film_icon.png",
    icon: "🎬"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">🚀 Projects</h2>
      <p className="projects-subtitle">
        A showcase of my development & data visualization work
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Project
                  </a>
                )}
                {project.github && project.github !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
