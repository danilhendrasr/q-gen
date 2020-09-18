import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import RefreshIcon from "./RefreshIcon";
import QuoteObject from "./quote-object.interface";

const Random = () => {
  const initialQuote: QuoteObject = {
    text: "",
    author: "",
    genre: "",
  };

  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const getRandomQuote = useCallback(async (): Promise<void> => {
    const quoteData = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );

    const newQuote: QuoteObject = {
      text: quoteData.data.quote.quoteText,
      author: quoteData.data.quote.quoteAuthor,
      genre: quoteData.data.quote.quoteGenre,
    };

    setCurrentQuote(newQuote);
  }, [setCurrentQuote]);

  useEffect((): void => {
    getRandomQuote();
  }, [getRandomQuote]);

  return (
    <div>
      <Quote
        text={currentQuote.text}
        author={currentQuote.author}
        genre={currentQuote.genre}
      />

      <button
        className="resetButton"
        onClick={() => getRandomQuote()}
      >
        random <RefreshIcon />
      </button>
    </div>
  );
};

export default Random;
