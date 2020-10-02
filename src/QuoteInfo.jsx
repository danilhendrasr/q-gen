import React from "react";

const QuoteInfo = (props) => {
  return (
    <div className="quote-info-wrapper">
      <h2 className="quote-author-wrapper">{props.author}</h2>
      <p className="quote-genre-wrapper">{props.genre}</p>
    </div>
  );
};

export default QuoteInfo;
