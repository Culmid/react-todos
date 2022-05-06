import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <h2 className={styles["about-header"]}>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum
        felis a nunc tempus mattis. Aliquam vel eros rutrum, rhoncus odio sit
        amet, porttitor arcu. Maecenas lectus est, hendrerit nec convallis id,
        ornare a tellus.
      </p>
      <p>
        Vestibulum eu dignissim orci, eu congue diam. Suspendisse potenti. Ut
        cursus, mauris vel semper fermentum, mi lectus euismod ligula, in
        feugiat justo ligula ullamcorper ex. Nam sit amet dui ultricies, iaculis
        ex eget, bibendum urna. Aliquam bibendum mauris posuere metus elementum
        tempus ut sit amet ligula.
      </p>
      <p>
        Praesent ultrices condimentum risus, in viverra odio hendrerit ac. Nunc
        pretium non nulla sed blandit. Suspendisse a semper tortor. Nunc mattis
        velit quis maximus semper.
      </p>
    </div>
  );
}

export default About;
