import ApostolateTypeReducer from "./ApostolateTypeReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  apostolateTypes: [],
  isFetching: false,
  error: false,
};

export const ApostolateTypeContext = createContext(INITIAL_STATE);

export const ApostolateTypeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApostolateTypeReducer, INITIAL_STATE);

  return (
    <ApostolateTypeContext.Provider
      value={{
        apostolateTypes: state.apostolateTypes,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ApostolateTypeContext.Provider>
  );
};