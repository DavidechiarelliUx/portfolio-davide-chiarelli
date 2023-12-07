import React from 'react';
import { projectsMock } from '../../mocks/projectsMock'; 
import styles from "./OtherProject.module.scss";

const OtherProjects = () => {
  return (
    <section className={styles.otherProjects}>
    <h2 className={styles.aboutTitle}><span>03.</span> View Full Project Archive</h2>
      <div className={styles.projectsContainer}>
        {projectsMock.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.folderIcon} alt="Project" className={styles.icon} />
            <img src={project.githubIcon} alt="GitHub" className={styles.icon} />
            <img src={project.playIcon} alt="Play" className={styles.icon} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
