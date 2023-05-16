//CREATE APOSTOLATE
export const createApostolateStart = () => ({
  type: "CREATE_APOSTOLATE_START",
});

export const createApostolateSuccess = (apostolate) => ({
  type: "CREATE_APOSTOLATE_SUCCESS",
  payload: apostolate,
});

export const createApostolateFailure = () => ({
  type: "CREATE_APOSTOLATE_FAILURE",
});

//GET APOSTOLATES
export const getApostolatesStart = () => ({
  type: "GET_APOSTOLATES_START",
});

export const getApostolatesSuccess = (apostolates) => ({
  type: "GET_APOSTOLATES_SUCCESS",
  payload: apostolates,
});

export const getApostolatesFailure = () => ({
  type: "GET_APOSTOLATES_FAILURE",
});

//GET ONE APOSTOLATE
export const getApostolateStart = () => ({
  type: "GET_APOSTOLATE_START",
});

export const getApostolateSuccess = (apostolate) => ({
  type: "GET_APOSTOLATE_SUCCESS",
  payload: apostolate,
});

export const getApostolateFailure = () => ({
  type: "GET_APOSTOLATE_FAILURE",
});

//UPDATE APOSTOLATE
export const updateApostolateStart = () => ({
  type: "UPDATE_APOSTOLATE_START",
});

export const updateApostolateSuccess = (apostolate) => ({
  type: "UPDATE_APOSTOLATE_SUCCESS",
  payload: apostolate,
});

export const updateApostolateFailure = () => ({
  type: "UPDATE_APOSTOLATE_FAILURE",
});

//DELETE APOSTOLATE
export const deleteApostolateStart = () => ({
  type: "DELETE_APOSTOLATE_START",
});

export const deleteApostolateSuccess = (id) => ({
  type: "DELETE_APOSTOLATE_SUCCESS",
  payload: id,
});

export const deleteApostolateFailure = () => ({
  type: "DELETE_APOSTOLATE_FAILURE",
});
