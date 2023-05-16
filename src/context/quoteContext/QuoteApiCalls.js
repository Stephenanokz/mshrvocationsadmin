import axios from "axios";
import {
  createQuoteFailure,
  createQuoteStart,
  createQuoteSuccess,
  deleteQuoteFailure,
  deleteQuoteStart,
  deleteQuoteSuccess,
  getQuotesFailure,
  getQuotesStart,
  getQuotesSuccess,
  updateQuoteStart,
  updateQuoteSuccess,
  updateQuoteFailure,
  getQuoteStart,
  getQuoteSuccess,
  getQuoteFailure,
} from "./QuoteActions";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getQuotesCall = async (dispatch) => {
  dispatch(getQuotesStart());
  try {
    const res = await axiosInstance.get("/quotes/", {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(getQuotesSuccess(res.data));
  } catch (err) {
    dispatch(getQuotesFailure());
  }
};

export const getQuoteCall = async (id, dispatch) => {
  dispatch(getQuoteStart());
  try {
    const res = await axiosInstance.get(`/quotes/find/${id}`, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    const quote = [];
    quote.push(res.data);
    dispatch(getQuoteSuccess(quote));
  } catch (err) {
    dispatch(getQuoteFailure());
  }
};

export const createQuoteCall = async (quote, dispatch) => {
  dispatch(createQuoteStart());
  try {
    const res = await axiosInstance.post("/quotes/", quote, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(createQuoteSuccess(res.data));
  } catch (err) {
    dispatch(createQuoteFailure());
  }
};

export const updateQuoteCall = async (quote, dispatch) => {
  dispatch(updateQuoteStart());
  try {
    const res = await axiosInstance.put("/quotes/" + quote._id, quote, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(updateQuoteSuccess(res.data));
  } catch (err) {
    dispatch(updateQuoteFailure());
  }
};

export const deleteQuoteCall = async (id, dispatch) => {
  dispatch(deleteQuoteStart());
  try {
    await axiosInstance.delete("/quotes/" + id, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(deleteQuoteSuccess(id));
  } catch (err) {
    dispatch(deleteQuoteFailure());
  }
};