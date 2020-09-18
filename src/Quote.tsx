import React from "react";
import { Link } from "react-router-dom";
import QuoteObject from "./quote-object.interface";

const Quote = (props: QuoteObject) => {
  return (
    <div className="quote-wrapper">
      <p className="quote-text-wrapper">{props.text}</p>
      <Link to="/1" className="quote-info-wrapper">
        <h2 className="quote-author-wrapper">{props.author}</h2>
        <p className="quote-genre-wrapper">{props.genre}</p>
      </Link>
    </div>
  );
};

export default Quote;
