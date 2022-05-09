import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-entry"]}>
          <Link className={styles["nav-link"]} to="/">
            Home
          </Link>
        </li>
        <li className={styles["nav-entry"]}>
          <Link className={styles["nav-link"]} to="/todos">
            Todos
          </Link>
        </li>
        <li className={styles["nav-entry"]}>
          <Link className={styles["nav-link"]} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
