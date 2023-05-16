//CREATE QUOTE
export const createQuoteStart = () => ({
  type: "CREATE_QUOTE_START",
});

export const createQuoteSuccess = (quote) => ({
  type: "CREATE_QUOTE_SUCCESS",
  payload: quote,
});

export const createQuoteFailure = () => ({
  type: "CREATE_QUOTE_FAILURE",
});

//GET QUOTES
export const getQuotesStart = () => ({
  type: "GET_QUOTES_START",
});

export const getQuotesSuccess = (quotes) => ({
  type: "GET_QUOTES_SUCCESS",
  payload: quotes,
});

export const getQuotesFailure = () => ({
  type: "GET_QUOTES_FAILURE",
});

//GET ONE QUOTE
export const getQuoteStart = () => ({
  type: "GET_QUOTE_START",
});

export const getQuoteSuccess = (quote) => ({
  type: "GET_QUOTE_SUCCESS",
  payload: quote,
});

export const getQuoteFailure = () => ({
  type: "GET_QUOTE_FAILURE",
});

//UPDATE QUOTE
export const updateQuoteStart = () => ({
  type: "UPDATE_QUOTE_START",
});

export const updateQuoteSuccess = (quote) => ({
  type: "UPDATE_QUOTE_SUCCESS",
  payload: quote,
});

export const updateQuoteFailure = () => ({
  type: "UPDATE_QUOTE_FAILURE",
});

//DELETE QUOTE
export const deleteQuoteStart = () => ({
  type: "DELETE_QUOTE_START",
});

export const deleteQuoteSuccess = (id) => ({
  type: "DELETE_QUOTE_SUCCESS",
  payload: id,
});

export const deleteQuoteFailure = () => ({
  type: "DELETE_QUOTE_FAILURE",
});
