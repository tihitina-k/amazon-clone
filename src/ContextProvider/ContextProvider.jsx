import React, { useState, createContext } from 'react'
import { useContext } from 'react';
const colorContex = createContext();
export const useColor = () => {
     return useContext(colorContex);
}
export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  const ToggleColor = () => {
    setColor((pre) => (pre === "light" ? "dark" : "light"));
  };
  return (
      <colorContex.Provider value={{ color, ToggleColor }}>
          {children}
    </colorContex.Provider>
  );
};

export default ThemeProvider