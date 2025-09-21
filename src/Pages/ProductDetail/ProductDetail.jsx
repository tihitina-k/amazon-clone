import React, { useEffect, useState } from 'react'
import classes from "./ProductDtail.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import ProductCard from '../../Components/Product/ProductCard'
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
//  console.log(productId)
  return (
    <LayOut>
      <ProductCard product = {product} />
    </LayOut>
  );
}

export default ProductDetail