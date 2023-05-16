import React, { useState, useContext, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { useNavigate } from "react-router-dom";
import { createApostolateTypeCall } from "../../context/apostolateTypeContext/ApostolateTypeApiCalls";
import { ApostolateTypeContext } from "../../context/apostolateTypeContext/ApostolateTypeContext";
import { ApostolateContext } from "../../context/apostolateContext/ApostolateContext";
import "./NewApostolateType.css";
import { getApostolatesCall } from "../../context/apostolateContext/ApostolateApiCalls";

const NewApostolateType = () => {
  const [apostolateType, setApostolateType] = useState(null);
  const { dispatch } = useContext(ApostolateTypeContext);
  const { apostolates, dispatch: dispatchApostolate } =
    useContext(ApostolateContext);
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(0);
  const [img, setImg] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    getApostolatesCall(dispatchApostolate);
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setApostolateType({
      ...apostolateType,
      [e.target.name]: value,
    });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setApostolateType({ ...apostolateType, [e.target.name]: value });
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
            setApostolateType((prev) => {
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
    createApostolateTypeCall(apostolateType, dispatch);
    return navigate("/apostolatetypes");
  };

  return (
    <div className="newPost">
      {isUploading && <div className="uploading">Uploading Image(s)...</div>}
      <h1 className="addPostTitle">New Apostolate Category</h1>
      <form className="addPostForm">
        <div className="addPostFormInputs">
          <label>Category Title</label>
          <input
            name="title"
            type="text"
            placeholder="Category Title Here"
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="About Category"
            onChange={handleChange}
          />
          <label>Apostolates</label>
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
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        {!img || uploaded === 1 ? (
          <button className="newPostButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="newPostButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default NewApostolateType;
