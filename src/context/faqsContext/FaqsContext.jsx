import FaqsReducer from "./FaqsReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  faqs: [],
  isFetching: false,
  error: false,
};

export const FaqsContext = createContext(INITIAL_STATE);

export const FaqsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FaqsReducer, INITIAL_STATE);

  return (
    <FaqsContext.Provider
      value={{
        faqs: state.faqs,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FaqsContext.Provider>
  );
};