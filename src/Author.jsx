import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Quote from "./Quote";

const AuthorPage = (props) => {
  const [quotes, setQuotes] = useState([]);
  const { authorName } = useParams();
  const quotesList = quotes.map((quote) => (
    <div className="single-quote-wrapper">
      <Quote text={quote.quoteText} />
    </div>
  ));

  const getAuthorQuotes = useCallback(async () => {
    const data = await axios.get(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=10`
    );

    console.log(data);

    setQuotes(data.data.quotes);
  }, [setQuotes, authorName]);

  useEffect(() => {
    getAuthorQuotes();
  }, [getAuthorQuotes]);
  return (
    <div>
      <div className="author-name-wrapper">
        <h1 className="author-name">Quotes by {authorName}</h1>
      </div>
      {quotesList}
    </div>
  );
};

export default AuthorPage;
