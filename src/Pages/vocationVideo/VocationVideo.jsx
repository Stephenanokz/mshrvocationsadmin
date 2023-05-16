import React, { useState, useContext, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import {
  getVocationVideoCall,
  updateVocationVideoCall,
} from "../../context/vocationVideoContext/VocationVideoApiCalls";
import { VocationVideoContext } from "../../context/vocationVideoContext/VocationVideoContext";
import "./VocationVideo.css";

let firstLoad = true;
let foundVocationVideo;

const VocationVideo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { vocationVideos, dispatch } = useContext(VocationVideoContext);

  useEffect(() => {
    getVocationVideoCall(params.vocationvideoId, dispatch);
  }, [dispatch]);

  let [updatedVocationVideo, setUpdatedVocationVideo] = useState([]);
  if (vocationVideos && firstLoad) {
    foundVocationVideo = vocationVideos[0];
    updatedVocationVideo = foundVocationVideo;
  }

  const [isDone, setIsDone] = useState(false);
  const [uploaded, setUploaded] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    firstLoad = false;
    const value = e.target.value;
    setUpdatedVocationVideo({
      ...updatedVocationVideo,
      [e.target.name]: value,
    });
  };

  const handleChooseImage = (e) => {
    firstLoad = false;
    setVideo(e.target.files[0]);
    setUpdatedVocationVideo({
      ...updatedVocationVideo,
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
            const optimizedvideoUrl = `${
              import.meta.env.VITE_IMAGEKIT_BASEURL
            }${videoPath}`;
            setUpdatedVocationVideo((prev) => {
              return { ...prev, [item.label]: optimizedvideoUrl };
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
    const updateVocationVideo = async () => {
      await updateVocationVideoCall(updatedVocationVideo, dispatch);
      setIsDone(true);
    };
    updateVocationVideo();
    // window.location.reload();
    // return navigate(`/VocationVideos`);
    // getPostCall(params.postId, dispatch);
  };

  return !updatedVocationVideo ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="post">
      {isUploading && <div className="uploading">Uploading Video(s)...</div>}
      {isDone && <div className="uploading">Updated!. Please refresh page</div>}
      <div className="postTitleContainer">
        <h1 className="postTitle">Vocation Videos</h1>
      </div>
      <div className="postContainer">
        <div className="postLeft">
          <div className="postInfoItem">
            <span className="postInfoKey">Video Title: </span>
            <span className="postName">{foundVocationVideo?.title}</span>
          </div>
          {/* <div className="postInfoItem">
            <span className="postInfoKey">Description: </span>
            <div className="postInfoValue">{foundVocationVideo?.desc}</div>
          </div> */}
          {foundVocationVideo?.video && (
            <div className="postInfoItem">
              <span className="postInfoKey">Video Thumbnail: </span>
              <div className="postInfoValue video">
                <video
                  key={foundVocationVideo?.video}
                  className="postvideo"
                  src={foundVocationVideo?.video}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="postRight">
          <form className="postForm">
            <div className="postFormInputs">
              <label>Video Title</label>
              <input
                type="text"
                placeholder={foundVocationVideo?.title}
                name="title"
                onChange={handleChange}
              />
              {/* <label>Description</label>
              <input
                type="text"
                placeholder={foundVocationVideo?.desc}
                name="desc"
                onChange={handleChange}
              /> */}
              <label>Video</label>
              <input
                type="file"
                id="video"
                name="video"
                onChange={handleChooseImage}
              />
            </div>
            {!video || uploaded === 1 ? (
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

export default VocationVideo;
