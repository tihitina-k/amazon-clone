import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <h3>{data?.title}</h3>
        <img src={data?.imgLink} alt={data?.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
