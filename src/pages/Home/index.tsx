import styles from "./Home.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GrRefresh } from "react-icons/gr";

type Quote = {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
};

function Home(): JSX.Element {
  const [quote, setQuote]: [
    Quote | null,
    Dispatch<SetStateAction<Quote | null>>
  ] = useState<Quote | null>(null);

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
        <figure className={styles.figure}>
          <blockquote>
            <p>{quote.content}</p>
          </blockquote>
          <figcaption className={styles.figcaption}>—{quote.author}</figcaption>
        </figure>
      ) : (
        <GrRefresh className={styles.loading} />
      )}
    </div>
  );
}

export default Home;
