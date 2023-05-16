import ApostolateReducer from "./ApostolateReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  apostolates: [],
  isFetching: false,
  error: false,
};

export const ApostolateContext = createContext(INITIAL_STATE);

export const ApostolateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApostolateReducer, INITIAL_STATE);

  return (
    <ApostolateContext.Provider
      value={{
        apostolates: state.apostolates,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ApostolateContext.Provider>
  );
};