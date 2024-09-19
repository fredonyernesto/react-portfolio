import styles from "../components/About/About.module.css"

export default function About() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.container}>
                {/* <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} />
                <ul className={styles.aboutItems}><li className={styles.aboutItem}><img src={getImageUrl("about/cursoIcon.png")} alt="" /></li></ul> */}
                <div className={styles.aboutText}>
                    <h3>Full Stack Develpoer</h3>
                    <p className="about-description">
                    I’m Ernest Fredony Jr., a full-stack developer based in Miami, Florida, 
                    with a passion for creating dynamic and engaging web applications. 
                    With a solid foundation in JavaScript, Node.js, and various web technologies, 
                    I thrive in both frontend and backend development. My experience spans from 
                    crafting intuitive user interfaces to optimizing server-side functionality. 
                    I’m driven by a love for solving complex problems and delivering high-quality 
                    software solutions. Whether I’m working on innovative projects or collaborating 
                    with teams, I’m dedicated to using my skills and knowledge to build impactful 
                    and user-friendly digital experiences.
                </p>
                </div>
        </div>
        </section>
    );
  }
  