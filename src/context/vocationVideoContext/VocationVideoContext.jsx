import VocationVideoReducer from "./VocationVideoReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  vocationVideos: [],
  isFetching: false,
  error: false,
};

export const VocationVideoContext = createContext(INITIAL_STATE);

export const VocationVideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VocationVideoReducer, INITIAL_STATE);

  return (
    <VocationVideoContext.Provider
      value={{
        vocationVideos: state.vocationVideos,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </VocationVideoContext.Provider>
  );
};