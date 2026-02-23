import React from 'react'
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <section className={styles.container}>
        <img src="./assets/profile/Mohammed.png" alt="Profile" className={styles.profileImg}></img>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm <span>Mohammed Mujammil A</span></h1>
            <p className={styles.description}> I'm a FrontEnd Developer,a aspiring UI/UX Designer,Reach out if you'd like to learn more!</p>
            <a href="mailto:muju120804@gmail.com" className={styles.ContactBtn}>Contact me</a>
        </div>
          
          <div className={styles.topBlur} />
            <div className={styles.bottomblur} />
    </section>
  )
}

export default Profile