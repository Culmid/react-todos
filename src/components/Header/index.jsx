import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1 className={styles.logo}>Todo List</h1>
    </header>
  );
}

export default Header;
