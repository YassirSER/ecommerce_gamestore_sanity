import React from "react";

import { client } from "../../../lib/client";
import { ProductsWithSorting } from "../../components/index";
import {
  gameCategories,
  gcCategories,
  gpCategories,
} from "../../categories/categories";

const ProductCategorised = async ({ params: { category } }) => {
  const products = await getProductsByCategory(category);

  const getFile = (slug) => {
    if (slug.includes("games")) {
      return gameCategories;
    } else if (slug.includes("cards")) {
      return gcCategories;
    } else if (
      slug.includes("points") ||
      slug.includes("cash") ||
      slug.includes("coins")
    ) {
      return gpCategories;
    } else {
      return "software";
    }
  };

  const getTitle = (badTitle) => {
    const file = getFile(badTitle);
    let res;
    if (file === "software") {
      res = "software";
    } else {
      file.forEach((value) => {
        if (
          value
            .replaceAll("-", "")
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(badTitle)
        ) {
          res = value;
        }
      });
    }
    return res.toUpperCase();
  };

  return (
    <>
      <div className="category-title">{getTitle(category)}</div>

      <ProductsWithSorting products={products} />
    </>
  );
};

const getProductsByCategory = async (category) => {
  const productsQuery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["${category}"]]) > 0] {
    name,
    price,
    image,
    slug
  }`;

  const products = await client.fetch(productsQuery);

  return products;
};

export default ProductCategorised;
