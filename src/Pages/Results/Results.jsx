import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Components/LayOut/LayOut";
import { productUrl } from "../../Api/EndPoint";
import { useState, useEffect } from "react";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    
      axios
        .get(`${productUrl}/products/category/${categoryName}`)
        // console
        //   // .log(`${productUrl}/products/category/${categoryName}`)
          .then((res) => setResults(res.data))
          .catch((err) =>
            console.log("Error fetching category products:", err)
          );
    
  }, []);

  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr/>
        <div className={classes.product_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </LayOut>
  );
}

export default Results;
