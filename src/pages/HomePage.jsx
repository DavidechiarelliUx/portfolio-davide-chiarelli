import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "../styles/HomePage.module.scss"; 
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectsMock } from "../mocks/mock";
import { stack } from "../mocks/stack";
import OtherProject from "@/components/OtherProjects";


export default function Homepage() {

  // const stack = [
  //   "JavaScript", "HTML5", "CSS3","SASS", "Firebase", "React", "NPM", "Next.js",
  //   "React Router", "TailwindCSS", "Node.js", "Figma", "Framer",
  //   "Adobe XD", "Canva", "TypeScript"
  // ];


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
        <section id="about" className={styles.aboutSection}>
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
                  <img 
                    src={tech.imageUrl} 
                    alt={tech.name} 
                    className={styles.img}
                    style={tech.id === 12 ? { marginBottom: '-10px' } : {}}
                  />
                </span>
              ))}
          </div>
        </section>
        <section id="work" className={styles.projectsSection}>
        <h2 className={styles.ProjectTitle}><span>02.</span> My Project</h2>
            {projectsMock.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
        <OtherProject/>
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>Write us</h2>
              <input type="text" placeholder="Name" className={styles.formInput} />
              <input type="email" placeholder="Email" className={styles.formInput} />
              <input type="text" placeholder="Subject" className={styles.formInput} />
              <textarea placeholder="Message" className={styles.formTextArea}></textarea>
              <button type="submit" className={styles.formButton}>Send Message</button>
            </div>
          
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Contact information</h2>
              <p className={styles.infoText}>se vuoi parlare con me chiamami oppure scrivimi un messaggio</p>
              <a href="mailto:chiarellidavide99@gmail.com" className={styles.contactEmail}>
                <img src="/assets/stack/gmail.svg" alt="Email" className={styles.icon} /> 
                chiarellidavide99@gmail.com
              </a>
              <a href="tel:+3664367468" className={styles.contactPhone}>
                <img src="/assets/stack/iphone.svg" alt="Phone" className={styles.icon} /> 
                3664367468
              </a>
              <a href="https://www.linkedin.com/in/davide-chiarelli-/" className={styles.socialLink}>
                <img src="/assets/stack/linkedin.svg" alt="LinkedIn" className={styles.icon} /> 
                LinkedIn
              </a>
              <a href="https://github.com/DavidechiarelliUx" className={styles.socialLink}>
                <img src="/assets/github.svg" alt="Github" className={styles.icon} /> 
                Github
              </a>
              <a href="https://vercel.com/dashboard" className={styles.socialLink}>
                <img src="/assets/stack/vercel.svg" alt="Vercel" className={styles.icon} /> 
                Vercel
              </a>
            </div>
        </section>
      </main>
    </>
  );
}
