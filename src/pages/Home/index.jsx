import React from "react";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { GrRefresh } from "react-icons/gr";

function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random?maxLength=200")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  }, []);

  return (
    <div className={styles["home-div"]}>
      {quote ? (
        <figure>
          <blockquote>
            <p>{quote.content}</p>
          </blockquote>
          <figcaption>—{quote.author}</figcaption>
        </figure>
      ) : (
        <GrRefresh className={styles.loading} />
      )}
    </div>
  );
}

export default Home;
