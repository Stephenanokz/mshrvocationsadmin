const FaqsReducer = (state, action) => {
  switch (action.type) {
    case "GET_FAQS_START":
      return {
        faqs: [],
        isFetching: true,
        error: false,
      };
    case "GET_FAQS_SUCCESS":
      return {
        faqs: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_FAQS_FAILURE":
      return {
        faqs: [],
        isFetching: false,
        error: true,
      };
    case "GET_FAQ_START":
      return {
        faqs: [],
        isFetching: true,
        error: false,
      };
    case "GET_FAQ_SUCCESS":
      return {
        faqs: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_FAQ_FAILURE":
      return {
        faqs: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_FAQ_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_FAQ_SUCCESS":
      return {
        faqs: state.faqs.filter((faq) => faq._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_FAQ_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_FAQ_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_FAQ_SUCCESS":
      return {
        faqs: [...state.faqs, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_FAQ_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_FAQ_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_FAQ_SUCCESS":
      return {
        faqs: state.faqs.map(
          (faq) => faq._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAQ_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default FaqsReducer;