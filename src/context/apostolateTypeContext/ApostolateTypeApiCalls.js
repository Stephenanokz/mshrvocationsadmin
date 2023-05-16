import axios from "axios";
import {
  createApostolateTypeFailure,
  createApostolateTypeStart,
  createApostolateTypeSuccess,
  deleteApostolateTypeFailure,
  deleteApostolateTypeStart,
  deleteApostolateTypeSuccess,
  getApostolateTypesFailure,
  getApostolateTypesStart,
  getApostolateTypesSuccess,
  updateApostolateTypeStart,
  updateApostolateTypeSuccess,
  updateApostolateTypeFailure,
  getApostolateTypeStart,
  getApostolateTypeSuccess,
  getApostolateTypeFailure,
} from "./ApostolateTypeActions";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getApostolateTypesCall = async (dispatch) => {
  dispatch(getApostolateTypesStart());
  try {
    const res = await axiosInstance.get("/apostolatetypes/", {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(getApostolateTypesSuccess(res.data));
  } catch (err) {
    dispatch(getApostolateTypesFailure());
  }
};

export const getApostolateTypeCall = async (id, dispatch) => {
  dispatch(getApostolateTypeStart());
  try {
    const res = await axiosInstance.get(`/apostolatetypes/find/${id}`, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    const apostolateType = [];
    apostolateType.push(res.data);
    dispatch(getApostolateTypeSuccess(apostolateType));
  } catch (err) {
    dispatch(getApostolateTypeFailure());
  }
};

export const createApostolateTypeCall = async (apostolateType, dispatch) => {
  dispatch(createApostolateTypeStart());
  try {
    const res = await axiosInstance.post("/apostolatetypes/", apostolateType, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(createApostolateTypeSuccess(res.data));
  } catch (err) {
    dispatch(createApostolateTypeFailure());
  }
};

export const updateApostolateTypeCall = async (apostolateType, dispatch) => {
  dispatch(updateApostolateTypeStart());
  try {
    const res = await axiosInstance.put("/apostolatetypes/" + apostolateType._id, apostolateType, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(updateApostolateTypeSuccess(res.data));
  } catch (err) {
    dispatch(updateApostolateTypeFailure());
  }
};

export const deleteApostolateTypeCall = async (id, dispatch) => {
  dispatch(deleteApostolateTypeStart());
  try {
    await axiosInstance.delete("/apostolatetypes/" + id, {
      headers: {
        token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
      },
    });
    dispatch(deleteApostolateTypeSuccess(id));
  } catch (err) {
    dispatch(deleteApostolateTypeFailure());
  }
};