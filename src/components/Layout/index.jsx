import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles["page-wrapper"]}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
