import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <>
    <div className={styles.projectCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.projectDate}>{project.date}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>
        <p className={styles.projectRole}>{project.role}</p>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.technologiesContainer}>
          {project.technologies.map((tech) => (
            <div key={tech.name} className={styles.techBadge}>
              <img src={tech.imageUrl} alt={tech.name} className={styles.techImage} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
