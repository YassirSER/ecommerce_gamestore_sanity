"use client";

import React from "react";

import { Product, Dropdown } from "../../components/index";

const CategorisedProducts = ({ products }) => {
  const options = [
    { value: "ASC", label: "ASC" },
    { value: "DESC", label: "DESC" },
    // { value: "red", label: "Red" },
  ];

  return (
    <>
      <div className="sorting-container">
        <Dropdown
          isSearchable
          //   isMulti
          placeHolder="Sort by"
          options={options}
          //   onChange={(value) => console.log(value)}
        />
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategorisedProducts;
