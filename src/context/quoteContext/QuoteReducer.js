const QuoteReducer = (state, action) => {
  switch (action.type) {
    case "GET_QUOTES_START":
      return {
        quotes: [],
        isFetching: true,
        error: false,
      };
    case "GET_QUOTES_SUCCESS":
      return {
        quotes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_QUOTES_FAILURE":
      return {
        quotes: [],
        isFetching: false,
        error: true,
      };
    case "GET_QUOTE_START":
      return {
        quotes: [],
        isFetching: true,
        error: false,
      };
    case "GET_QUOTE_SUCCESS":
      return {
        quotes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_QUOTE_FAILURE":
      return {
        quotes: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_QUOTE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_QUOTE_SUCCESS":
      return {
        quotes: state.quotes.filter((quote) => quote._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_QUOTE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_QUOTE_SUCCESS":
      return {
        quotes: [...state.quotes, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_QUOTE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_QUOTE_SUCCESS":
      return {
        quotes: state.quotes.map(
          (quote) => quote._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default QuoteReducer;