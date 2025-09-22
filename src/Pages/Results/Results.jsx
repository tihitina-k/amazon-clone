import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Components/LayOut/LayOut";
import { productUrl } from "../../Api/EndPoint";
import { useState, useEffect } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      // console
      //   // .log(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category / {categoryName}</p>
            <hr />
            <div className={classes.product_container}>
              {results?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAddToCart={true}
                  renderDescription={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Results;
