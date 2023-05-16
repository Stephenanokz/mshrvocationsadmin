import axios from "axios";
import {
  createVocationVideoFailure,
  createVocationVideoStart,
  createVocationVideoSuccess,
  deleteVocationVideoFailure,
  deleteVocationVideoStart,
  deleteVocationVideoSuccess,
  getVocationVideosFailure,
  getVocationVideosStart,
  getVocationVideosSuccess,
  updateVocationVideoStart,
  updateVocationVideoSuccess,
  updateVocationVideoFailure,
  getVocationVideoStart,
  getVocationVideoSuccess,
  getVocationVideoFailure,
} from "./VocationVideoActions";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getVocationVideosCall = async (dispatch) => {
  dispatch(getVocationVideosStart());
  try {
    const res = await axiosInstance.get("/vocationvideos/", {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(getVocationVideosSuccess(res.data));
  } catch (err) {
    dispatch(getVocationVideosFailure());
  }
};

export const getVocationVideoCall = async (id, dispatch) => {
  dispatch(getVocationVideoStart());
  try {
    const res = await axiosInstance.get(`/vocationvideos/find/${id}`, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    const vocationVideo = [];
    vocationVideo.push(res.data);
    dispatch(getVocationVideoSuccess(vocationVideo));
  } catch (err) {
    dispatch(getVocationVideoFailure());
  }
};

export const createVocationVideoCall = async (vocationVideo, dispatch) => {
  dispatch(createVocationVideoStart());
  try {
    const res = await axiosInstance.post("/vocationvideos/", vocationVideo, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(createVocationVideoSuccess(res.data));
  } catch (err) {
    dispatch(createVocationVideoFailure());
  }
};

export const updateVocationVideoCall = async (vocationVideo, dispatch) => {
  dispatch(updateVocationVideoStart());
  try {
    const res = await axiosInstance.put("/vocationvideos/" + vocationVideo._id, vocationVideo, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(updateVocationVideoSuccess(res.data));
  } catch (err) {
    dispatch(updateVocationVideoFailure());
  }
};

export const deleteVocationVideoCall = async (id, dispatch) => {
  dispatch(deleteVocationVideoStart());
  try {
    await axiosInstance.delete("/vocationvideos/" + id, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(deleteVocationVideoSuccess(id));
  } catch (err) {
    dispatch(deleteVocationVideoFailure());
  }
};