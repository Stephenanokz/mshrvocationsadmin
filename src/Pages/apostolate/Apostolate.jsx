import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getApostolateCall,
  updateApostolateCall,
} from "../../context/apostolateContext/ApostolateApiCalls";
import { ApostolateContext } from "../../context/apostolateContext/ApostolateContext";
import "./Apostolate.css";

let firstLoad = true;
let foundApostolate;

const Apostolate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { apostolates, dispatch } = useContext(ApostolateContext);

  useEffect(() => {
    getApostolateCall(params.apostolateId, dispatch);
  }, [dispatch]);

  const [isDone, setIsDone] = useState(false);
  let [updatedApostolate, setUpdatedApostolate] = useState([]);
  if (apostolates && firstLoad) {
    foundApostolate = apostolates[0];
    updatedApostolate = foundApostolate;
  }

  const handleChange = (e) => {
    firstLoad = false;
    const value = e.target.value;
    setUpdatedApostolate({ ...updatedApostolate, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    firstLoad = false;
    setUpdatedApostolate({
      ...updatedApostolate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateApostolate = async () => {
      await updateApostolateCall(updatedApostolate, dispatch);
      setIsDone(true);
    };
    updateApostolate();
    // window.location.reload()
    // getApostolateCall(params.apostolateId, dispatch);
    // return navigate(`/apostolates`);
  };

  return !updatedApostolate ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="post">
      {isDone && <div className="uploading">Updated!. Please refresh page</div>}
      <div className="postTitleContainer">
        <h1 className="postTitle">Our Apostolates</h1>
      </div>
      <div className="postContainer">
        <div className="postLeft">
          <div className="postInfoItem">
            <span className="postInfoKey">Apostolate Name: </span>
            <span className="postName">{foundApostolate.name}</span>
          </div>
          {foundApostolate?.url && (
            <div className="postInfoItem">
              <span className="postInfoKey">Url: </span>
              <span className="postName">{foundApostolate.url}</span>
            </div>
          )}
          <div className="postInfoItem">
            <span className="postInfoKey">Category: </span>
            <span className="postName">{foundApostolate.type}</span>
          </div>
        </div>
        <div className="postRight">
          <form className="postForm">
            <div className="postFormInputs">
              <label>Apostolate Name</label>
              <input
                type="text"
                placeholder={foundApostolate?.name}
                name="name"
                onChange={handleChange}
              />
              <label>Url (Optional)</label>
              <input
                type="text"
                placeholder={foundApostolate?.url}
                name="url"
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
            <button className="postButton" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apostolate;
