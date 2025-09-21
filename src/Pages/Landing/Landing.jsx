import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import CarouselEffect from "../../Components/Carolusel/Carousel";
import Category from "../../Components/Catgory/Category";
import Product from "../../Components/Product/Product";

const Landing = () => {
  return (
    <LayOut>
     <CarouselEffect/>
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;
