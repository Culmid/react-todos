import styles from "./About.module.css";

function About(): JSX.Element {
  return (
    <div className={styles["about-container"]}>
      <h2 className={styles["about-header"]}>About</h2>
      <p className={styles.p}>
        This App is the final project for the React section of the Graduate
        Program at Yoco. We are tasked to build a Todo list where we demonstrate
        knowledge of props, state, basic styling in React, props drilling,
        state-lifting and `useReducer`.
      </p>
      <p className={styles.p}>
        This App is constructed using a Figma design as a basis. See the project
        repo for reference images. However, it is worth noting that the idea of
        the project was not styling. Despite this, some visual improvements have
        been made over the initial design.
      </p>
      <p className={styles.p}>
        Please see the GitHub repo for more information on the project. Any
        recommendations are welcome, as well as offers of help. I hope this
        project is helpful.
      </p>
    </div>
  );
}

export default About;
