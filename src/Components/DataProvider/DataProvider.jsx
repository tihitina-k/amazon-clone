// Components/DataProvider/DataProvider.jsx
import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ reducer, initialState, children }) => {
  // ✅ useReducer is now INSIDE the component
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
  {children}
</DataContext.Provider>

 

  );
};
