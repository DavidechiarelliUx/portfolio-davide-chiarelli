import React, { useState, useEffect } from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(timer);
  }, [project.imageUrls.length]);

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
    <div className={styles.projectCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.projectDate}>{project.date}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>

        <div className={styles.imageContainer}>
          <img src={project.imageUrls[currentImageIndex]} alt="Project Slide" />
        </div>

        <div className={styles.indicators}>
          {project.imageUrls.map((_, index) => (
            <span 
            key={index} 
            className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => handleIndicatorClick(index)}
            ></span>
            ))}
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
          <div className={styles.projectActions}>
          <a href="https://fun-trade-cb7.vercel.app/" className={styles.viewProject}>
          view on Vercel
          <img src="/assets/stack/vercel.svg" alt="GitHub" className={styles.icon} /> 
          </a>
          <a href="https://github.com/DavidechiarelliUx/fun-trade" className={styles.viewProject}>
          view on Github
          <img src="/assets/github.svg" alt="GitHub" className={styles.icon} />
          </a>
          </div>
      </div>
    </div>
      
    </>
  );
};

export default ProjectCard;

