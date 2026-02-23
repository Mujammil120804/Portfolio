import React from 'react'
import styles from './Project.module.css'
import projects from "../../data/projects.json"
const Project = () => {
  return (
    <section className={styles.container} id="Projects">
        <h1 className={styles.titles}>Projects</h1>
        <div className={styles.projects}>
          {
            projects.map((projects,id) =>{
              return(
              <div key={id}>
                <img src={projects.imagesrc} alt={`Image of ${projects.title}`} className={styles.image} />
                <h3 className={styles.title}> {projects.title}</h3>
                <p className={styles.description}>{projects.description}</p>
                <div>
                  <a href={projects.Link} className={styles.link}>Link</a>
                </div>
              </div>
              );
            })
          }
        </div>
    </section>
  )
}

export default Project