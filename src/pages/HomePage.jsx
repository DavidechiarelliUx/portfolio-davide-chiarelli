import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "../styles/HomePage.module.scss"; 
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectsMock } from "../mocks/mock";
import { stack } from "../mocks/stack";
import OtherProject from "@/components/OtherProjects";


export default function Homepage() {


  return (
   <>
    <header className={styles.header}>
        <HamburgerMenu/>
    </header>
    <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <p className={styles.p}>Hi, my name is</p>
          <h1 className={styles.h1}>Davide Chiarelli.</h1>
          <h2 className={styles.description}>Designing the future of the web, one pixel at a time</h2>
          <p> I am a front-end developer with a strong passion for crafting engaging and intuitive digital experiences. I focus on developing sleek and accessible user interfaces, utilizing the latest technologies to ensure a smooth and enjoyable web interaction.</p>
          <div>
          <a href="https://drive.google.com/file/d/1xU0B_tVkOs53LtBs3Na5C8AGx_qrpNtJ/view?usp=sharing" download>
                  <button className={styles.ResumeButton}>Download My Cv</button>
          </a>
          </div>
      
        </section>
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}><span>01.</span> About Me</h2>
          <p className={styles.aboutText}>
            👋 Ciao a tutti! Sono Davide, un appassionato Front-End Developer con un innata creatività 🌀 e un background in UX/UI Design. 🎨 Il mio obiettivo è creare esperienze web coinvolgenti e funzionali, utilizzando la mia competenza nel codice e nel design.
            <br/><br/>
            💼 Ho completato con successo il Corso di Front-End Developer presso Edgemony, affinando le mie abilità in HTML, CSS, JavaScript, React e Next.js ❤️‍🔥. Amo affrontare sfide tecniche e trovare soluzioni intuitive per migliorare l`esperienza utente.
            <br/><br/>
            Sono sempre alla ricerca di nuove sfide e opportunità di crescita professionale. Se hai un progetto entusiasmante o vuoi semplicemente condividere idee, non esitare a contattarmi. 🚀
          </p>
          <div className={styles.stackContainer}>
              {stack.map((tech) => (
                <span key={tech.id} className={styles.techBadge}>
                  {tech.name}
                  <img src={tech.imageUrl} alt={tech.name} className={styles.img}/>
                </span>
              ))}
          </div>

        </section>
        <section className={styles.projectsSection}>
        <h2 className={styles.ProjectTitle}><span>02.</span> My Project</h2>
            {projectsMock.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
        <OtherProject/>
      </main>
    </>
  );
}
