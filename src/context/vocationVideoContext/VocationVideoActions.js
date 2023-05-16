//CREATE VOCATION VIDEO
export const createVocationVideoStart = () => ({
  type: "CREATE_VOCATIONVIDEO_START",
});

export const createVocationVideoSuccess = (vocationVideo) => ({
  type: "CREATE_VOCATIONVIDEO_SUCCESS",
  payload: vocationVideo,
});

export const createVocationVideoFailure = () => ({
  type: "CREATE_VOCATIONVIDEO_FAILURE",
});

//GET VOCATION VIDEOS
export const getVocationVideosStart = () => ({
  type: "GET_VOCATIONVIDEOS_START",
});

export const getVocationVideosSuccess = (vocationVideos) => ({
  type: "GET_VOCATIONVIDEOS_SUCCESS",
  payload: vocationVideos,
});

export const getVocationVideosFailure = () => ({
  type: "GET_VOCATIONVIDEOS_FAILURE",
});

//GET ONE VOCATION VIDEO
export const getVocationVideoStart = () => ({
  type: "GET_VOCATIONVIDEO_START",
});

export const getVocationVideoSuccess = (vocationVideo) => ({
  type: "GET_VOCATIONVIDEO_SUCCESS",
  payload: vocationVideo,
});

export const getVocationVideoFailure = () => ({
  type: "GET_VOCATIONVIDEO_FAILURE",
});

//UPDATE VOCATION VIDEO
export const updateVocationVideoStart = () => ({
  type: "UPDATE_VOCATIONVIDEO_START",
});

export const updateVocationVideoSuccess = (vocationVideo) => ({
  type: "UPDATE_VOCATIONVIDEO_SUCCESS",
  payload: vocationVideo,
});

export const updateVocationVideoFailure = () => ({
  type: "UPDATE_VOCATIONVIDEO_FAILURE",
});

//DELETE VOCATION VIDEO
export const deleteVocationVideoStart = () => ({
  type: "DELETE_VOCATIONVIDEO_START",
});

export const deleteVocationVideoSuccess = (id) => ({
  type: "DELETE_VOCATIONVIDEO_SUCCESS",
  payload: id,
});

export const deleteVocationVideoFailure = () => ({
  type: "DELETE_VOCATIONVIDEO_FAILURE",
});
