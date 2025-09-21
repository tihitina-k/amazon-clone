import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import classes from "./Product.module.css";

const ProductCard = ({ singleproduct, onAddToCart }) => {
  if (!singleproduct) return null;

  const { image, title, rating, id, price } = singleproduct;

  return (
    <div className={classes.productCard}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.productImage} />
      </Link>

      <h3 className={classes.productTitle}>{title}</h3>

      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.1} readOnly />
        <small>({rating?.count || 0})</small>
      </div>

      <div className={classes.productPrice}>
        <CurrencyFormat
          value={price}
          displayType="text"
          thousandSeparator
          prefix="$"
          renderText={(value) => <span>{value}</span>}
        />
      </div>

      <button
        className={classes.button}
        onClick={() => onAddToCart(singleproduct)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
