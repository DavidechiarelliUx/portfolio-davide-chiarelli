import React, { useEffect } from 'react';
import styles from './MouseLight.module.scss';

// Definizione della funzione isMobile
const isMobile = () => (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
  'ontouchstart' in document.documentElement
);

const MouseLight = () => {
  useEffect(() => {
    // Utilizzo della funzione isMobile
    if (!isMobile()) {
      const updateMouseLightPosition = (e) => {
        const light = document.getElementById('mouse-light');
        if (light) {
          light.style.top = `${e.pageY}px`;
          light.style.left = `${e.pageX}px`;
          light.style.opacity = 1;
        }
      };

      document.addEventListener('mousemove', updateMouseLightPosition);
      document.addEventListener('mouseout', () => {
        const light = document.getElementById('mouse-light');
        if (light) {
          light.style.opacity = 0;
        }
      });

      return () => {
        document.removeEventListener('mousemove', updateMouseLightPosition);
      };
    }
  }, []);

  return <div id="mouse-light" className={styles.mouseLight}></div>;
};

export default MouseLight;
