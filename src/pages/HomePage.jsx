import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "../styles/HomePage.module.scss"; 

export default function Homepage() {

  return (
   <>
    <header className={styles.header}>
        <HamburgerMenu/>
    </header>
    </>
  );
}
