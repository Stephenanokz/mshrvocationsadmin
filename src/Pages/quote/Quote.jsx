import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getQuoteCall,
  updateQuoteCall,
} from "../../context/quoteContext/QuoteApiCalls";
import { QuoteContext } from "../../context/quoteContext/QuoteContext";
import "./Quote.css";

let firstLoad = true;
let foundQuote;

const Quote = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { quotes, dispatch } = useContext(QuoteContext);

  useEffect(() => {
    getQuoteCall(params.quoteId, dispatch);
  }, [dispatch]);

  const [isDone, setIsDone] = useState(false);
  let [updatedQuote, setUpdatedQuote] = useState([]);
  if (quotes && firstLoad) {
    foundQuote = quotes[0];
    updatedQuote = foundQuote;
  }

  const handleChange = (e) => {
    firstLoad = false;
    const value = e.target.value;
    setUpdatedQuote({ ...updatedQuote, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateQuote = async () => {
      await updateQuoteCall(updatedQuote, dispatch);
      setIsDone(true);
    };
    updateQuote();
    // window.location.reload();
    // getQuoteCall(params.quoteId, dispatch);
    // return navigate(`/quotes`);
  };

  return !updatedQuote ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="post">
      {isDone && <div className="uploading">Updated!. Please refresh page</div>}
      <div className="postTitleContainer">
        <h1 className="postTitle">Founder's Quotes</h1>
      </div>
      <div className="postContainer">
        <div className="postLeft">
          <div className="postInfoItem">
            <span className="postInfoKey">Quote Text: </span>
            <span className="postName">{foundQuote.text}</span>
          </div>
        </div>
        <div className="postRight">
          <form className="postForm">
            <div className="postFormInputs">
              <label>Quote Text</label>
              <input
                type="text"
                placeholder={foundQuote?.text}
                name="text"
                onChange={handleChange}
              />
            </div>
            <button className="postButton" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
