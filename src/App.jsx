import "./App.css";
import CarouselEffect from "./Components/Carolusel/Carousel";
import Category from "./Components/Catgory/Category";

import Header from "./Components/Header/Header";
 import Product from './Components/Product/Product'
import React from "react";

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
      
    </>
  );
}

export default App;