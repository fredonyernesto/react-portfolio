import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils/getImg";

export default function Contact() {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
          <a href="mailto:fredony.ernesto@gmail.com">Email Me</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub Icon" />
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </footer>
  )
}
