import styles from "./Header.module.css";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <h1 className={styles.logo}>Todo List</h1>
      <Nav />
    </header>
  );
}

export default Header;
