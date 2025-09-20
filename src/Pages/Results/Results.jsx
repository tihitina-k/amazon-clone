import React, { useEffect, useState } from "react";
import classes from ".Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Endpoints";
import Product from "../../Components/Product/Product";
import ProductCard from "../../Components/Product/ProductCard";
function Results() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then(() => {
        setResult(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "30" }}>Results</h1>
        <p style={{ padding: "30" }}>catagory / {category}</p>
        <hr />
        <div className={classes.productGrid}>
          {result?.map((Product) => (
            <ProductCard key={Product.id} product={Product} />
          ))}
        </div>
      </div>
    </LayOut>
  );
}

export default Results;
