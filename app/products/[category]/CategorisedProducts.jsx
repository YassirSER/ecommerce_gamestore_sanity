"use client";

import React, { useState } from "react";

import { Product, Dropdown } from "../../components/index";

const CategorisedProducts = ({ products }) => {
  const options = [
    { value: "ASC", label: "ASC" },
    { value: "DESC", label: "DESC" },
  ];

  const [filter, setFilter] = useState("");

  const sortProducts = (sortType) => {
    if (sortType === "ASC") {
      return products.sort((a, b) => (a["price"] < b["price"] ? -1 : 1));
    } else if (sortType === "DESC") {
      return products.sort((a, b) => (b["price"] > a["price"] ? 1 : -1));
    }
  };

  return (
    <>
      <div className="sorting-container">
        <Dropdown
          //   isSearchable
          //   isMulti
          placeHolder="Sort by"
          options={options}
          onChange={(value) => {
            setFilter(value.value);
          }}
        />
      </div>

      <div className="products-container">
        {filter.length > 1
          ? sortProducts(filter).map((product) => (
              <Product key={product._id} product={product} />
            ))
          : products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
      </div>
    </>
  );
};

export default CategorisedProducts;
