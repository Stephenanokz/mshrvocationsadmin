import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFaqCall,
  updateFaqCall,
} from "../../context/faqsContext/FaqsApiCalls";
import { FaqsContext } from "../../context/faqsContext/FaqsContext";
import "./Faq.css";

let firstLoad = true;
let foundFaq;

const Faq = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { faqs, dispatch } = useContext(FaqsContext);

  useEffect(() => {
    getFaqCall(params.faqId, dispatch);
  }, [dispatch]);

  const [isDone, setIsDone] = useState(false);
  let [updatedFaq, setUpdatedFaq] = useState([]);
  if (faqs && firstLoad) {
    foundFaq = faqs[0];
    updatedFaq = foundFaq;
  }

  const handleChange = (e) => {
    firstLoad = false;
    const value = e.target.value;
    setUpdatedFaq({ ...updatedFaq, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateFaq = async () => {
      await updateFaqCall(updatedFaq, dispatch);
      setIsDone(true);
    };
    updateFaq();
    // window.location.reload();
    // getFaqCall(params.FaqId, dispatch);
    // return navigate(`/Faqs`);
  };

  return !updatedFaq ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="post">
      {isDone && <div className="uploading">Updated!. Please refresh page</div>}
      <div className="postTitleContainer">
        <h1 className="postTitle">Frequently Asked Questions (FAQs)</h1>
      </div>
      <div className="postContainer">
        <div className="postLeft">
          <div className="postInfoItem">
            <span className="postInfoKey">Question: </span>
            <span className="postName">{foundFaq.question}</span>
          </div>
          <div className="postInfoItem">
            <span className="postInfoKey">Answer: </span>
            <span className="postName">{foundFaq.answer}</span>
          </div>
        </div>
        <div className="postRight">
          <form className="postForm">
            <div className="postFormInputs">
              <label>Question</label>
              <input
                type="text"
                placeholder={foundFaq?.question}
                name="question"
                onChange={handleChange}
              />
              <label>Answer</label>
              <input
                type="text"
                placeholder={foundFaq?.answer}
                name="answer"
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

export default Faq;
