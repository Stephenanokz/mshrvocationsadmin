import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createFaqCall } from "../../context/faqsContext/FaqsApiCalls";
import { FaqsContext } from "../../context/faqsContext/FaqsContext";
import "./NewFaq.css";

const NewFaq = () => {
  const [faq, setFaq] = useState(null);
  const { dispatch } = useContext(FaqsContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFaq({
      ...faq,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFaqCall(faq, dispatch);
    return navigate("/faqs");
  };

  return (
    <div className="newPost">
      <h1 className="addPostTitle">New FAQ</h1>
      <form className="addPostForm">
        <div className="addPostFormInputs">
          <label>Question</label>
          <input
            name="question"
            type="text"
            placeholder="Enter question here"
            onChange={handleChange}
          />
          <label>Answer</label>
          <input
            name="answer"
            type="text"
            placeholder="Enter answer here"
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

export default NewFaq;
