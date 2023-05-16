import axios from "axios";
import {
  createApostolateFailure,
  createApostolateStart,
  createApostolateSuccess,
  deleteApostolateFailure,
  deleteApostolateStart,
  deleteApostolateSuccess,
  getApostolatesFailure,
  getApostolatesStart,
  getApostolatesSuccess,
  updateApostolateStart,
  updateApostolateSuccess,
  updateApostolateFailure,
  getApostolateStart,
  getApostolateSuccess,
  getApostolateFailure,
} from "./ApostolateActions";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getApostolatesCall = async (dispatch) => {
  dispatch(getApostolatesStart());
  try {
    const res = await axiosInstance.get("/apostolates/", {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(getApostolatesSuccess(res.data));
  } catch (err) {
    dispatch(getApostolatesFailure());
  }
};

export const getApostolateCall = async (id, dispatch) => {
  dispatch(getApostolateStart());
  try {
    const res = await axiosInstance.get(`/apostolates/find/${id}`, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    const apostolate = [];
    apostolate.push(res.data);
    dispatch(getApostolateSuccess(apostolate));
  } catch (err) {
    dispatch(getApostolateFailure());
  }
};

export const createApostolateCall = async (apostolate, dispatch) => {
  dispatch(createApostolateStart());
  try {
    const res = await axiosInstance.post("/apostolates/", apostolate, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(createApostolateSuccess(res.data));
  } catch (err) {
    dispatch(createApostolateFailure());
  }
};

export const updateApostolateCall = async (apostolate, dispatch) => {
  dispatch(updateApostolateStart());
  try {
    const res = await axiosInstance.put("/apostolates/" + apostolate._id, apostolate, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(updateApostolateSuccess(res.data));
  } catch (err) {
    dispatch(updateApostolateFailure());
  }
};

export const deleteApostolateCall = async (id, dispatch) => {
  dispatch(deleteApostolateStart());
  try {
    await axiosInstance.delete("/apostolates/" + id, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(deleteApostolateSuccess(id));
  } catch (err) {
    dispatch(deleteApostolateFailure());
  }
};