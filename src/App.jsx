import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RefreshIcon from "./RefreshIcon";
import "./styles.css";

export default function App() {
  const [currentQuote, setCurrentQuote] = useState({});

  const getRandomQuote = useCallback(async () => {
    const quoteData = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );

    setCurrentQuote({
      text: quoteData.data.quote.quoteText,
      author: quoteData.data.quote.quoteAuthor,
      genre: quoteData.data.quote.quoteGenre
    });
  }, [setCurrentQuote]);

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  return (
    <div className="wrapper">
      <div className="quote-wrapper">
        <p className="quote-text-wrapper">{currentQuote.text}</p>
        <div className="quote-info-wrapper">
          <h2 className="quote-author-wrapper">{currentQuote.author}</h2>
          <p className="quote-genre-wrapper">{currentQuote.genre}</p>
        </div>
      </div>
      <button className="resetButton" onClick={() => getRandomQuote()}>
        random <RefreshIcon />
      </button>
    </div>
  );
}
