const ApostolateReducer = (state, action) => {
  switch (action.type) {
    case "GET_APOSTOLATES_START":
      return {
        apostolates: [],
        isFetching: true,
        error: false,
      };
    case "GET_APOSTOLATES_SUCCESS":
      return {
        apostolates: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_APOSTOLATES_FAILURE":
      return {
        apostolates: [],
        isFetching: false,
        error: true,
      };
    case "GET_APOSTOLATE_START":
      return {
        apostolates: [],
        isFetching: true,
        error: false,
      };
    case "GET_APOSTOLATE_SUCCESS":
      return {
        apostolates: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_APOSTOLATE_FAILURE":
      return {
        apostolates: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_APOSTOLATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_APOSTOLATE_SUCCESS":
      return {
        apostolates: state.apostolates.filter((apostolate) => apostolate._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_APOSTOLATE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_APOSTOLATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_APOSTOLATE_SUCCESS":
      return {
        apostolates: [...state.apostolates, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_APOSTOLATE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_APOSTOLATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_APOSTOLATE_SUCCESS":
      return {
        apostolates: state.apostolates.map(
          (apostolate) => apostolate._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_APOSTOLATE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ApostolateReducer;