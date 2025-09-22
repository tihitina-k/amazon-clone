import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import {initialState,reducer} from './Utility/reducer'
ReactDOM.createRoot(document.getElementById("root")).render(
  
  
  
  
  <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
      
      <App />
    </DataProvider>
  </BrowserRouter>
);



