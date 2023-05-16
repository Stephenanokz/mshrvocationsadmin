const VocationVideoReducer = (state, action) => {
  switch (action.type) {
    case "GET_VOCATIONVIDEOS_START":
      return {
        vocationVideos: [],
        isFetching: true,
        error: false,
      };
    case "GET_VOCATIONVIDEOS_SUCCESS":
      return {
        vocationVideos: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_VOCATIONVIDEOS_FAILURE":
      return {
        vocationVideos: [],
        isFetching: false,
        error: true,
      };
    case "GET_VOCATIONVIDEO_START":
      return {
        vocationVideos: [],
        isFetching: true,
        error: false,
      };
    case "GET_VOCATIONVIDEO_SUCCESS":
      return {
        vocationVideos: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_VOCATIONVIDEO_FAILURE":
      return {
        vocationVideos: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_VOCATIONVIDEO_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_VOCATIONVIDEO_SUCCESS":
      return {
        vocationVideos: state.vocationVideos.filter((vocationVideo) => vocationVideo._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_VOCATIONVIDEO_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_VOCATIONVIDEO_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_VOCATIONVIDEO_SUCCESS":
      return {
        vocationVideos: [...state.vocationVideos, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_VOCATIONVIDEO_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_VOCATIONVIDEO_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_VOCATIONVIDEO_SUCCESS":
      return {
        vocationVideos: state.vocationVideos.map(
          (vocationVideo) => vocationVideo._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_VOCATIONVIDEO_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default VocationVideoReducer;