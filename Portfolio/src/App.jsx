// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Nav'
import styles from "./App.module.css"
import Contact from './components/Contact/Contact';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className={styles.App}>
        <Nav />
        <Outlet />
        <Contact />
      </div>
    </>
  );
}

export default App;
