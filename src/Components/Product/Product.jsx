import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [Products, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
          {Products?.map((singleproduct) => {
            return (
              <ProductCard
                product={singleproduct}
                key={singleproduct.id}
                renderAddToCart={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;

// import React, { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   // Add to cart handler
//   const handleAddToCart = (product) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((p) => p.id === product.id);
//       if (existing) {
//         // increase quantity
//         return prevCart.map((p) =>
//           p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Compute total price
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>Products</h2>
//       <div className={classes.productGrid}>
//         {products.map((p) => (
//           <ProductCard
//             key={p.id}
//             singleproduct={p}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>

//       <div className={classes.cart}>
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Cart is empty</p>
//         ) : (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.title} x {item.quantity} = $
//                 {(item.price * item.quantity).toFixed(2)}
//               </li>
//             ))}
//           </ul>
//         )}
//         <p>Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default Products;
