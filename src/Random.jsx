import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import QuoteInfo from "./QuoteInfo";
import RandomButton from "./RandomButton";
import LoadingIndicator from "./LoadingIndicator";

const Random = () => {
  const [currentQuote, setCurrentQuote] = useState({});

  const getRandomQuote = useCallback(async () => {
    setCurrentQuote({});
    const quoteData = await axios.get(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );

    const newQuote = {
      text: quoteData.data.quote.quoteText,
      author: quoteData.data.quote.quoteAuthor,
      genre: quoteData.data.quote.quoteGenre,
    };

    setCurrentQuote(newQuote);
  }, [setCurrentQuote]);

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  return (
    <div>
      {Object.keys(currentQuote).length > 0 ? (
        <div className="quote-wrapper">
          <Quote text={currentQuote.text} />
          <QuoteInfo
            author={currentQuote.author}
            genre={currentQuote.genre}
          />
        </div>
      ) : (
        <LoadingIndicator />
      )}
      <RandomButton onClick={() => getRandomQuote()} />
    </div>
  );
};

export default Random;
