import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import {Type} from "../../Utility/action.type";
// function ProductCard({ product, AddToCart, flex, renderDescription }) {
function ProductCard({ product, flex, renderDescription, renderAddToCart }) {
  if (!product) return <p>Loading...</p>;
  // const { image, title, rating = {}, id, price, description } = product;
  const { image, title, rating, id, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  // console.log(state)
  const AddToBag = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, rating, id, price, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${flex ? classes.product_flex : ""}`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <h3>{title}</h3>
      {renderDescription && (
        <div style={{ maxWidth: "500px" }}>{description}</div>
      )}
      {renderAddToCart && (
        <button className={classes.button} onClick={() => AddToBag?.(product)}>
          Add Cart
        </button>
      )}
      <Rating value={rating?.rate || 0} precision={0.1} readOnly />
      <small>{rating?.count || 0}</small>

      <CurrencyFormat amount={price} />
    </div>
  );
}
export default ProductCard;
