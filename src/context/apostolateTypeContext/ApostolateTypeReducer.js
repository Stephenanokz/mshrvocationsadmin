const apostolateTypeReducer = (state, action) => {
  switch (action.type) {
    case "GET_APOSTOLATETYPES_START":
      return {
        apostolateTypes: [],
        isFetching: true,
        error: false,
      };
    case "GET_APOSTOLATETYPES_SUCCESS":
      return {
        apostolateTypes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_APOSTOLATETYPES_FAILURE":
      return {
        apostolateTypes: [],
        isFetching: false,
        error: true,
      };
    case "GET_APOSTOLATETYPE_START":
      return {
        apostolateTypes: [],
        isFetching: true,
        error: false,
      };
    case "GET_APOSTOLATETYPE_SUCCESS":
      return {
        apostolateTypes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_APOSTOLATETYPE_FAILURE":
      return {
        apostolateTypes: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_APOSTOLATETYPE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_APOSTOLATETYPE_SUCCESS":
      return {
        apostolateTypes: state.apostolateTypes.filter((apostolateType) => apostolateType._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_APOSTOLATETYPE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_APOSTOLATETYPE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_APOSTOLATETYPE_SUCCESS":
      return {
        apostolateTypes: [...state.apostolateTypes, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_APOSTOLATETYPE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_APOSTOLATETYPE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_APOSTOLATETYPE_SUCCESS":
      return {
        apostolateTypes: state.apostolateTypes.map(
          (apostolateType) => apostolateType._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_APOSTOLATETYPE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default apostolateTypeReducer;