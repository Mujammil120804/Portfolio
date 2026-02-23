import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className={styles.container} id="Contact">
        <h2 className={styles.title}>Contact</h2>
        <h4>CONNECT WITH ME</h4>
        <form className={styles.contact}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" className={styles.input} height="40px" required/>
          <label>Your Email</label>
          <input type="Email" placeholder="Enter Mail Address" className={styles.input} height="40px" required/>
          <label>Message</label>
          <textarea rows="7" placeholder="Type your Message" className={styles.input}></textarea>
          <a href="mailto:muju120804@gmail.com"  className={styles.btn}>Send Message</a>
        </form>
        <div className={styles.link}>
          <a href="https://www.linkedin.com/in/mohammed-mujammil-a-6b98bb26a" target="_blank" >
          <img src="./assets/contact/linkedin.png" className={styles.img} width="50px" height="50px"></img>
          </a>
          <a href="https://github.com/Mujammil120804" target="_blank">
          <img src="./assets/contact/Github.png" className={styles.img} width="50px" height="50px" ></img>
          </a>
          <a href="mailto:muju120804@gmail.com" target="_blank">
          <img src="./assets/contact/mail.png" className={styles.img} width="50px" height="50px"></img>
          </a>
        </div> 
        <footer className={styles.footer}>
          <p>&copy;2025,Developed by Mujammil</p>
        </footer>
      </section>
  )
}

export default Contact