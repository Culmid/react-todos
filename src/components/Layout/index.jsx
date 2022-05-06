import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles["page-wrapper"]}>
      <Header />
      <Footer />
    </div>
  );
}

export default Layout;
