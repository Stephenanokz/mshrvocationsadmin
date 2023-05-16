import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createApostolateCall } from "../../context/apostolateContext/ApostolateApiCalls";
import { ApostolateContext } from "../../context/apostolateContext/ApostolateContext";
import "./NewApostolate.css";

const NewApostolate = () => {
  const [apostolate, setApostolate] = useState(null);
  const { dispatch } = useContext(ApostolateContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setApostolate({
      ...apostolate,
      [e.target.name]: value,
    });
  };

  const handleSelect = (e) => {
    setApostolate({
      ...apostolate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createApostolateCall(apostolate, dispatch);
    return navigate("/apostolates");
  };

  return (
    <div className="newPost">
      <h1 className="addPostTitle">New Apostolate</h1>
      <form className="addPostForm">
        <div className="addPostFormInputs">
          <label>Apostolate Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={handleChange}
          />
          <label>Url</label>
          <input
            name="url"
            type="text"
            placeholder="Enter url (link) here"
            onChange={handleChange}
          />
          <label>Category</label>
          <select name="type" onChange={handleSelect}>
            <option value="education">Education</option>
            <option value="medical">Medical</option>
            <option value="social">Social</option>
            <option value="pastoral">Pastoral</option>
            <option value="ecology">Ecology</option>
            <option value="women empowerment">Women Empowerment</option>
            <option value="comm development">Community Development</option>
          </select>
        </div>
        <button className="newPostButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewApostolate;
