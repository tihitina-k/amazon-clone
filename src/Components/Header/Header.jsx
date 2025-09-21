import React, { useContext } from "react";
import classes from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  // const [state, dispatch] = useContext(DataContext)
  // destructure;

  const [{basket}, dispatch] = useContext(DataContext)   
  // console.log(state.length)
  return (
    <>
      <div className={classes.Header_Container}>
        {/* Left Section: Logo */}
        <div className={classes.logo_Container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
        </div>

        {/* Delivery Info */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search..." />
          <BsSearch size={25} />
        </div>

        {/* Language */}
        <div className={classes.language}>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4692/4692307.png"
              alt="flag"
            />
            <select name="" id="">
              <option value="">ENG</option>
            </select>
          </a>
        </div>

        {/* Right Section */}
        <div className={classes.rightSection}>
          {/* Sign In */}
          <Link to="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{basket.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
