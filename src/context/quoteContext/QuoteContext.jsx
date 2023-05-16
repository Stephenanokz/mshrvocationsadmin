import QuoteReducer from "./QuoteReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  quotes: [],
  isFetching: false,
  error: false,
};

export const QuoteContext = createContext(INITIAL_STATE);

export const QuoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuoteReducer, INITIAL_STATE);

  return (
    <QuoteContext.Provider
      value={{
        quotes: state.quotes,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};