//CREATE FAQ
export const createFaqStart = () => ({
  type: "CREATE_FAQ_START",
});

export const createFaqSuccess = (faq) => ({
  type: "CREATE_FAQ_SUCCESS",
  payload: faq,
});

export const createFaqFailure = () => ({
  type: "CREATE_FAQ_FAILURE",
});

//GET FAQS
export const getFaqsStart = () => ({
  type: "GET_FAQS_START",
});

export const getFaqsSuccess = (faqs) => ({
  type: "GET_FAQS_SUCCESS",
  payload: faqs,
});

export const getFaqsFailure = () => ({
  type: "GET_FAQS_FAILURE",
});

//GET ONE FAQ
export const getFaqStart = () => ({
  type: "GET_FAQ_START",
});

export const getFaqSuccess = (faq) => ({
  type: "GET_FAQ_SUCCESS",
  payload: faq,
});

export const getFaqFailure = () => ({
  type: "GET_FAQ_FAILURE",
});

//UPDATE FAQ
export const updateFaqStart = () => ({
  type: "UPDATE_FAQ_START",
});

export const updateFaqSuccess = (faq) => ({
  type: "UPDATE_FAQ_SUCCESS",
  payload: faq,
});

export const updateFaqFailure = () => ({
  type: "UPDATE_FAQ_FAILURE",
});

//DELETE FAQ
export const deleteFaqStart = () => ({
  type: "DELETE_FAQ_START",
});

export const deleteFaqSuccess = (id) => ({
  type: "DELETE_FAQ_SUCCESS",
  payload: id,
});

export const deleteFaqFailure = () => ({
  type: "DELETE_FAQ_FAILURE",
});
