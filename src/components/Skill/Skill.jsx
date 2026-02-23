import React from 'react'
import styles from './Skill.module.css'
const Skill = () => {
  return (
    <section className={styles.container} id="Skills">
     <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
    <div>
     <div className={styles.ImgContainer}>
      <img src="./assets/skills/Html.png" className={styles.Img} ></img>
     </div>
      <h3>HTML5</h3> 
    </div>  
    <div>  
    <div className={styles.ImgContainer}>
      <img src="./assets/skills/CSS.png" className={styles.Img}></img>
    </div>
      <h3>CSS</h3>     
    </div>
    <div>
    <div className={styles.ImgContainer}>
      <img src="./assets/skills/JS.png" className={styles.Img}></img>
     </div> 
      <h3>Javascript</h3>     
     </div>
     <div>
      <div className={styles.ImgContainer}>
      <img src="./assets/skills/Reactjs.png" className={styles.Img} ></img>
      </div>
      <h3>Reactjs</h3>     
     </div>
     <div>
     <div className={styles.ImgContainer}>
      <img src="./assets/skills/Bootstrap.png" className={styles.Img }></img>
    </div>
      <h3>Bootstrap</h3>     
     </div>
     <div>
      <div className={styles.ImgContainer}> 
      <img src="./assets/skills/Figma.png" className={styles.Img}></img>
      </div>
      <h3>Figma</h3>     
     </div>   
    </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img src="./assets/skills/internship.png" width="100px"></img>
        <div className={styles.aboutItemText}>
       <h2>Experience</h2>
       <h3>UI/UX Intern</h3>
      <span><p>ILife Technologies,Trichy</p></span> 
       <p>Internship focused on UI/UX development using Figma.
 <br></br> Designed user interfaces, including layouts, buttons, and
 icons,ensuring consistency with the company’s design
 guidelines.</p>
      </div>
      </li>
      </ul>
    </section>
  )
}

export default Skill;