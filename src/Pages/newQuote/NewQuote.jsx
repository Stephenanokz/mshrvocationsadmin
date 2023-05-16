import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createQuoteCall } from "../../context/quoteContext/QuoteApiCalls";
import { QuoteContext } from "../../context/quoteContext/QuoteContext";
import "./NewQuote.css";

const NewQuote = () => {
  const [quote, setQuote] = useState(null);
  const { dispatch } = useContext(QuoteContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuote({
      ...quote,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuoteCall(quote, dispatch);
    return navigate("/quotes");
  };

  return (
    <div className="newPost">
      <h1 className="addPostTitle">New Quote</h1>
      <form className="addPostForm">
        <div className="addPostFormInputs">
          <label>Quote Text</label>
          <input
            name="text"
            type="text"
            placeholder="Enter text here"
            onChange={handleChange}
          />
        </div>
        <button className="newPostButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewQuote;
