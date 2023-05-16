import React, { useState, useContext, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import {
  getApostolateTypeCall,
  updateApostolateTypeCall,
} from "../../context/apostolateTypeContext/ApostolateTypeApiCalls";
import { ApostolateTypeContext } from "../../context/apostolateTypeContext/ApostolateTypeContext";
import "./ApostolateType.css";
import { ApostolateContext } from "../../context/apostolateContext/ApostolateContext";
import { getApostolatesCall } from "../../context/apostolateContext/ApostolateApiCalls";
import axios from "axios";

let firstLoad = true;
let foundApostolateType;

const ApostolateType = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const { apostolateTypes, dispatch } = useContext(ApostolateTypeContext);
  const { apostolates, dispatch: dispatchApostolate } =
    useContext(ApostolateContext);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  useEffect(() => {
    getApostolateTypeCall(params.apostolatetypeId, dispatch);
    getApostolatesCall(dispatchApostolate);
  }, [dispatch, dispatchApostolate]);

  let [updatedApostolateType, setUpdatedApostolateType] = useState([]);
  if (apostolateTypes && firstLoad) {
    foundApostolateType = apostolateTypes[0];
    updatedApostolateType = foundApostolateType;
  }

  const [uploaded, setUploaded] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    firstLoad = false;
    const value = e.target.value;
    setUpdatedApostolateType({
      ...updatedApostolateType,
      [e.target.name]: value,
    });
  };

  const handleSelect = (e) => {
    firstLoad = false;
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setUpdatedApostolateType({
      ...updatedApostolateType,
      [e.target.name]: value,
    });
  };

  const handleChooseImage = (e) => {
    firstLoad = false;
    setImg(e.target.files[0]);
    setUpdatedApostolateType({
      ...updatedApostolateType,
    });
  };

  const upload = (items) => {
    setIsUploading(true);
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/imgs/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // console.log("Upload is " + progress + "% completed.");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const imagePath = downloadURL.slice(75);
            const optimizedImgUrl = `${
              import.meta.env.VITE_IMAGEKIT_BASEURL
            }${imagePath}`;
            setUpdatedApostolateType((prev) => {
              return { ...prev, [item.label]: optimizedImgUrl };
            });
            setUploaded((prev) => prev + 1);
          });
          setIsUploading(false);
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: img, label: "img" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateApostolateType = async () => {
      await updateApostolateTypeCall(updatedApostolateType, dispatch);
      setIsDone(true);
    };
    updateApostolateType();
    // getApostolateTypeCall(params.apostolatetypeId, dispatch);
    // window.location.reload();
    // return navigate(`/apostolatetypes`);
  };

  return !updatedApostolateType ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="post">
      {isUploading && <div className="uploading">Uploading Image(s)...</div>}
      {isDone && <div className="uploading">Updated!. Please refresh page</div>}
      <div className="postTitleContainer">
        <h1 className="postTitle">Apostolate Categories</h1>
      </div>
      <div className="postContainer">
        <div className="postLeft">
          <div className="postInfoItem">
            <span className="postInfoKey">Category Title: </span>
            <span className="postName">{foundApostolateType?.title}</span>
          </div>
          <div className="postInfoItem">
            <span className="postInfoKey">About: </span>
            <div className="postInfoValue">{foundApostolateType?.desc}</div>
          </div>
          {/* {foundApostolateType?.apostolates && (
            <div className="postInfoItem">
              <span className="postInfoKey">Apostolates: </span>
              <div className="postInfoValue">
                <ol>
                  {foundApostolateType?.apostolates?.map((apostolate) => (
                    <li key={apostolate}>{apostolate}</li>
                  ))}
                </ol>
              </div>
            </div>
          )} */}
          {foundApostolateType?.img && (
            <div className="postInfoItem">
              <span className="postInfoKey">Image: </span>
              <div className="postInfoValue img">
                <img
                  className="postImg apostype"
                  src={foundApostolateType?.img}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="postRight">
          <form className="postForm">
            <div className="postFormInputs">
              <label>Category Title</label>
              <input
                type="text"
                placeholder={foundApostolateType?.title}
                name="title"
                onChange={handleChange}
              />
              <label>Description</label>
              <textarea
                name="desc"
                placeholder={`About ${foundApostolateType?.title} apostolate`}
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
              <label>Select Apostolates for {foundApostolateType.title}</label>
              <select
                multiple
                name="apostolates"
                onChange={handleSelect}
                style={{ height: "200px" }}
              >
                {apostolates.map((apostolate) => (
                  <option key={apostolate._id} value={apostolate._id}>
                    {apostolate.name}
                  </option>
                ))}
              </select>
              <label>Image</label>
              <input
                type="file"
                id="img"
                name="img"
                onChange={handleChooseImage}
              />
            </div>
            {!img || uploaded === 1 ? (
              <button className="newPostButton" onClick={handleSubmit}>
                Update
              </button>
            ) : (
              <button className="newPostButton" onClick={handleUpload}>
                Upload
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApostolateType;
