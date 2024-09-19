import styles from '../components/Resume/resume.module.css'

export default function Resume() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.container}>
        {/* <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} />
                <ul className={styles.aboutItems}><li className={styles.aboutItem}><img src={getImageUrl("about/cursoIcon.png")} alt="" /></li></ul> */}
        <div className={styles.aboutText}>
          <p className="about-description">
            Thank you for visiting my portfolio site! If you've made it this far,
            I truly appreciate your time and interest. If you’re an employer and
            would like to learn more about my experience, please click the button
            below to download my resume.
          </p>
        </div>
        <div>
          <a href="/resume.md" download="resume.md">
            <button>Download Resume</button>
          </a>
        </div>

      </div>
    </section>
  );
}