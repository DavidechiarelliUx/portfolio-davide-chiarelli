import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "../styles/HomePage.module.scss"; 

export default function Homepage() {

  const stack = [
    "JavaScript", "HTML5", "CSS3", "Firebase", "React", "NPM", "Next.js",
    "React Router", "SASS", "TailwindCSS", "Node.js", "Figma", "Framer",
    "Adobe XD", "Canva", "TypeScript"
  ];


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
            👋 Ciao a tutti! Sono Davide, un`appassionato Front-End Developer con un innata creatività 🌀 e un background in UX/UI Design. 🎨 Il mio obiettivo è creare esperienze web coinvolgenti e funzionali, utilizzando la mia competenza nel codice e nel design.
            <br/><br/>
            💼 Ho completato con successo il Corso di Front-End Developer presso Edgemony, affinando le mie abilità in HTML, CSS, JavaScript, React e Next.js ❤️‍🔥. Amo affrontare sfide tecniche e trovare soluzioni intuitive per migliorare l`esperienza utente.
            <br/><br/>
            Sono sempre alla ricerca di nuove sfide e opportunità di crescita professionale. Se hai un progetto entusiasmante o vuoi semplicemente condividere idee, non esitare a contattarmi. 🚀
          </p>
          <div className={styles.stackContainer}>
            {stack.map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
