import styles from "./navbar.module.css"

export default function Navbar({ links }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {links.map((link, index) => (
          <li key={index} className={styles.menuItem}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}