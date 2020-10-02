import React from "react";

const Quote = (props) => {
  return (
    <div className="quote-wrapper">
      <p className="quote-text-wrapper">{props.text}</p>
      <div className="quote-info-wrapper">
        <h2 className="quote-author-wrapper">{props.author}</h2>
        <p className="quote-genre-wrapper">{props.genre}</p>
      </div>
    </div>
  );
};

export default Quote;
