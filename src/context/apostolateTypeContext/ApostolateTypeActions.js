//CREATE APOSTOLATE TYPE
export const createApostolateTypeStart = () => ({
  type: "CREATE_APOSTOLATETYPE_START",
});

export const createApostolateTypeSuccess = (apostolateTypes) => ({
  type: "CREATE_APOSTOLATETYPE_SUCCESS",
  payload: apostolateTypes,
});

export const createApostolateTypeFailure = () => ({
  type: "CREATE_APOSTOLATETYPE_FAILURE",
});

//GET APOSTOLATE TYPES
export const getApostolateTypesStart = () => ({
  type: "GET_APOSTOLATETYPES_START",
});

export const getApostolateTypesSuccess = (apostolateType) => ({
  type: "GET_APOSTOLATETYPES_SUCCESS",
  payload: apostolateType,
});

export const getApostolateTypesFailure = () => ({
  type: "GET_APOSTOLATETYPES_FAILURE",
});

//GET ONE APOSTOLATE TYPE
export const getApostolateTypeStart = () => ({
  type: "GET_APOSTOLATETYPE_START",
});

export const getApostolateTypeSuccess = (apostolateType) => ({
  type: "GET_APOSTOLATETYPE_SUCCESS",
  payload: apostolateType,
});

export const getApostolateTypeFailure = () => ({
  type: "GET_APOSTOLATETYPE_FAILURE",
});

//UPDATE APOSTOLATE TYPE
export const updateApostolateTypeStart = () => ({
  type: "UPDATE_APOSTOLATETYPE_START",
});

export const updateApostolateTypeSuccess = (apostolateType) => ({
  type: "UPDATE_APOSTOLATETYPE_SUCCESS",
  payload: apostolateType,
});

export const updateApostolateTypeFailure = () => ({
  type: "UPDATE_APOSTOLATETYPE_FAILURE",
});

//DELETE APOSTOLATE TYPE
export const deleteApostolateTypeStart = () => ({
  type: "DELETE_APOSTOLATETYPE_START",
});

export const deleteApostolateTypeSuccess = (id) => ({
  type: "DELETE_APOSTOLATETYPE_SUCCESS",
  payload: id,
});

export const deleteApostolateTypeFailure = () => ({
  type: "DELETE_APOSTOLATETYPE_FAILURE",
});
