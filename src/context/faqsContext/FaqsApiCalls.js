import axios from "axios";
import {
  createFaqFailure,
  createFaqStart,
  createFaqSuccess,
  deleteFaqFailure,
  deleteFaqStart,
  deleteFaqSuccess,
  getFaqsFailure,
  getFaqsStart,
  getFaqsSuccess,
  updateFaqStart,
  updateFaqSuccess,
  updateFaqFailure,
  getFaqStart,
  getFaqSuccess,
  getFaqFailure,
} from "./FaqsActions";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getFaqsCall = async (dispatch) => {
  dispatch(getFaqsStart());
  try {
    const res = await axiosInstance.get("/faqs/", {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(getFaqsSuccess(res.data));
  } catch (err) {
    dispatch(getFaqsFailure());
  }
};

export const getFaqCall = async (id, dispatch) => {
  dispatch(getFaqStart());
  try {
    const res = await axiosInstance.get(`/faqs/find/${id}`, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    const faq = [];
    faq.push(res.data);
    dispatch(getFaqSuccess(faq));
  } catch (err) {
    dispatch(getFaqFailure());
  }
};

export const createFaqCall = async (faq, dispatch) => {
  dispatch(createFaqStart());
  try {
    const res = await axiosInstance.post("/faqs/", faq, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(createFaqSuccess(res.data));
  } catch (err) {
    dispatch(createFaqFailure());
  }
};

export const updateFaqCall = async (faq, dispatch) => {
  dispatch(updateFaqStart());
  try {
    const res = await axiosInstance.put("/faqs/" + faq._id, faq, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(updateFaqSuccess(res.data));
  } catch (err) {
    dispatch(updateFaqFailure());
  }
};

export const deleteFaqCall = async (id, dispatch) => {
  dispatch(deleteFaqStart());
  try {
    await axiosInstance.delete("/faqs/" + id, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(deleteFaqSuccess(id));
  } catch (err) {
    dispatch(deleteFaqFailure());
  }
};