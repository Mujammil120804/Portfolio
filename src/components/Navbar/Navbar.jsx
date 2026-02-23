import React,{useState} from 'react'
import styles from "./Navbar.module.css";
// import {getImageUrl} from "../../Utils";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Mujammil Portfolio</a>
        <div className={styles.menu}>
            {/* <img className={styles.menuBtn} src="./assets/nav/menubar.png" alt="menu button"></img> */}
            <img className={styles.menuBtn} src={
              menuOpen
               ? ("./assets/nav/cancel-xxl.png")
               : ("./assets/nav/menubar.png")
            }
            onClick={()=>setMenuOpen(!menuOpen)}
            alt="menu-button"></img>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}
            >
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar