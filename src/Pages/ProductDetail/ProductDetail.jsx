import React, { useEffect, useState } from 'react'
import classes from "./ProductDtail.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] =useState(false);
  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }, [productId]);
//  console.log(productId)
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard product={product}
        flex={true}
          renderDescription={true}
     /> )  }
      {/* <ProductCard product = {product} /> */}
    </LayOut>
  );
}

export default ProductDetail