import React from "react";
import classes  from "./Product.module.css";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className={classes.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={classes.productImage}
      />
      <h3 className={classes.productTitle}>{product.title}</h3>
      <h3 className={classes.productPrice}>${product.price}</h3>
    </div>
  );
};

export default ProductCard;
