import React, { useState, useContext } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { useNavigate } from "react-router-dom";
import { createVocationVideoCall } from "../../context/vocationVideoContext/VocationVideoApiCalls";
import { VocationVideoContext } from "../../context/vocationVideoContext/VocationVideoContext";
import "./NewVocationVideo.css";

const NewVocationVideo = () => {
  const [vocationVideo, setVocationVideo] = useState(null);
  const { dispatch } = useContext(VocationVideoContext);
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(0);
  const [video, setVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setVocationVideo({
      ...vocationVideo,
      [e.target.name]: value,
    });
  };

  const upload = (items) => {
    setIsUploading(true);
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/vids/${fileName}`);
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
            const videoPath = downloadURL.slice(75);
            const optimizedVideoUrl = `${
              import.meta.env.VITE_IMAGEKIT_BASEURL
            }${videoPath}`;
            setVocationVideo((prev) => {
              return { ...prev, [item.label]: optimizedVideoUrl };
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
    upload([{ file: video, label: "video" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createVocationVideoCall(vocationVideo, dispatch);
    return navigate("/vocationvideos");
  };

  return (
    <div className="newPost">
      {isUploading && <div className="uploading">Uploading Video(s)...</div>}
      <h1 className="addPostTitle">New Vocation Video</h1>
      <form className="addPostForm">
        <div className="addPostFormInputs">
          <label>Video Title</label>
          <input
            name="title"
            type="text"
            placeholder="Video Title Here"
            onChange={handleChange}
          />
          <label>Descriiption</label>
          <input
            name="desc"
            type="text"
            placeholder="Video Description"
            onChange={handleChange}
          />
          <label>Image</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {!video || uploaded === 1 ? (
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

export default NewVocationVideo;
