import React from "react";
import { Link } from "react-router-dom";

const QuoteInfo = (props) => {
  return (
    <Link
      to={`/author/${props.author}`}
      className="quote-info-wrapper"
    >
      <h2 className="quote-author">{props.author}</h2>
      <p className="quote-genre">{props.genre}</p>
    </Link>
  );
};

export default QuoteInfo;
