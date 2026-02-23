import React from 'react'
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact'
function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Profile />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div> 
     
  );
}

export default App