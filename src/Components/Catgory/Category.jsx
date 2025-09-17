import React from "react";
import { CatagoryInfo } from "./CatgoryInput";
import CategoryCard from "./CategoryCard";
import classes from './Catagory.module.css'

function Category() {
  return (
    <>
      <div className={classes.catagory_container}>
        {CatagoryInfo.map((info) => (
          <CategoryCard data={info} />
        ))}
      </div>
    </>
  );
}

export default Category;
