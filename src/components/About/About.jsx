import React from 'react'
import styles from './About.module.css'
const About = () => {
  return (
    <section className={styles.container} id="About">
      <div className={styles.title}>
        <img src="./assets/about/user.png" className={styles.aboutImage}></img>
        <h2>About me</h2>
      </div>
        <div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                  <img src="./assets/about/education.png" width="15%"></img>
                  <div className={styles.aboutItemText}>
                    <h2>Education</h2>
                    <h3>Bachelor of Computer Science</h3>
                    <p>Jamal Mohamed College,Trichy</p>
                    <p>2022-2025</p>
                  </div>
                </li>
                <li className={styles.aboutItem}>
                  <img src="./assets/about/web-design.png" width="15%"></img>
                  <div className={styles.aboutItemText}>
                    <h2>FrontEnd Developer</h2>
                    <p>I'm a frontend developer with hands on experience in Frontend skills</p>
                  </div>
                </li>
                 <li className={styles.aboutItem}>
                  <img src="./assets/about/ui-design.png" alt="UI" width="15%"></img>
                  <div className={styles.aboutItemText}>
                    <h2>UI Designer</h2>
                    <p>I have experience in UI Designing and working on figma tool with an internship in UI/UX Designing at ILife Technologies</p>
                  </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About