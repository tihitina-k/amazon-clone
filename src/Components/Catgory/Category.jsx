import React from "react";
import { CatagoryInfo } from "./CatgoryInput";
import CategoryCard from "./CategoryCard";
import classes from './Catagory.module.css'

function Category() {
  return (
    <>
      <div className={classes.catagory_container}>
        {CatagoryInfo.map((item, index) => (
          <CategoryCard key={index} data={item} />
        
        ))}
      </div>
    </>
  );
}

export default Category;
