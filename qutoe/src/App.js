import "./App.css";
import { useState } from "react";
function App() {
  const [quote, setQuote] = useState("Click the button to get a random quote.");
  const [author, setAuthor] = useState("");

  const getNewQuote = () => {
    fetch("https://quotes-api-self.vercel.app/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };
  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <div className="quote-container">
        <p id="quote">
          {quote}.-{author}
        </p>
        <button id="get-quote" onClick={getNewQuote}>
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default App;
