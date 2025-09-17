
import React from "react";
import classes  from "./Catagory.module.css";
function CategoryCard({ data }) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h3>{data.title}</h3>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
