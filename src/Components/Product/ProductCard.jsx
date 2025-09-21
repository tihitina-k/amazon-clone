
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import {Link} from "react-router-dom"

function ProductCard({ product, onAddToCart }) {
  if (!product) return <p>Loading...</p>;
  const { image, title, rating = {}, id, price } = product;

  return (
    <div className={classes.card_container}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <h3>{title}</h3>

      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.1} readOnly />
        <small>{rating?.count || 0}</small>
      </div>

      <CurrencyFormat amount={price} />

      <button className={classes.button} onClick={() => onAddToCart?.(product)}>
        Add Cart
      </button>
    </div>
  );
}
export default ProductCard;