import styles from '../components/HomePage/HomePage.module.css';

export default function HomePage() {
  return (
      <section className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.Title}>
                  Hello,<br />
                  I'm Ernest
              </h1>
              <h2>Full Stack Developer</h2>
              <p className={styles.description}>
                  I'm a passionate developer based in Miami, Florida, with a strong background in web development and programming. 
                  With hands-on experience in JavaScript, Node.js, and various frameworks, I thrive on building dynamic and engaging applications. 
                  Whether it's creating a user-friendly interface or optimizing backend functionality, I enjoy the challenge of bringing ideas to life through code.
              </p>
              <a href="mailto:fredony.ernesto@gmail.com"><button>Contact Me</button></a>
          </div>
          {/* <img src={getImageUrl("hero/heroImage.png")} alt="Me" /> */}
          <div className={styles.topBlur}></div>
          <div className={styles.bottomBlur}></div>
      </section>
  );
}
