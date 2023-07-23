"use client";

import React, { useState } from "react";

import { Dropdown, Product } from "./index";
import Link from "next/link";
import { useStateContext } from "../app/context/stateContext";
import { useRouter } from "next/navigation";
import { usePagination } from "@mantine/hooks";

const itemsPerPage = 10;

const ProductsWithSorting = ({ products }) => {
  const [filter, setFilter] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsPerPage)
  );
  const [active, setActive] = useState({});
  // const { currentPage, setCurrentPage, pageToId } = useStateContext()
  // const router = useRouter()

  const pagesNum = Math.ceil(products.length / itemsPerPage);

  const pagination = usePagination({
    total: pagesNum,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      // if (filter.length > 1) {
      //   setVisibleProducts(sortProducts(filter, products).slice(start, end));
      // } else {
      //   setVisibleProducts(products.slice(start, end));
      // }
      setVisibleProducts(products.slice(start, end));
    },
  });

  const sortProducts = (sortType, productsArg) => {
    if (sortType === "ASC") {
      return productsArg.sort((a, b) => (a["price"] < b["price"] ? -1 : 1));
    } else if (sortType === "DESC") {
      return productsArg.sort((a, b) => (b["price"] > a["price"] ? 1 : -1));
    }
  };

  return (
    <div className="bottom-products-container">
      {products.length >= 1 && (
        <div className="sorting-container">
          <p>Results found: {products.length} </p>
          <Dropdown
            //   isSearchable
            //   isMulti
            key={"keyyyylessgoo"}
            placeHolder="Sort by"
            options={[
              { value: "ASC", label: "Price: Low to High" },
              { value: "DESC", label: "Price: High to Low" },
            ]}
            onChange={(value) => {
              setFilter(value.value);
              setVisibleProducts(
                sortProducts(value.value, products).slice(0, 10)
              );
            }}
          />
        </div>
      )}
      <div className="products-container">
        {products.length < 1 && <div>no results found</div>}
        {visibleProducts.map((product) => (
          <Product key={product.slug.current} product={product} />
        ))}
      </div>
      {itemsPerPage < products.length && (
        <div className="pagination-btns">
          {pagination.range.map((range) =>
            range === "dots" ? (
              <button className="pagination-btn" key={range}>
                ...
              </button>
            ) : (
              <button
                className={
                  active[range] ? "pagination-btn active" : "pagination-btn"
                }
                key={range}
                onClick={() => {
                  pagination.setPage(range);
                  setActive({ [range]: true });
                }}
              >
                {range}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsWithSorting;
