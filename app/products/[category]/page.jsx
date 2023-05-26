import React from "react";

import { client } from "../../../lib/client";
// import CategorisedProducts from "./CategorisedProducts";
import { ProductsWithSorting } from "../../components/index";

const ProductCategorised = async ({ params: { category } }) => {
  const products = await getProductsByCategory(category);

  return <ProductsWithSorting products={products} />;
};

const getProductsByCategory = async (category) => {
  const productsQuery = `*[_type == "product" && category == "${category}"]`;

  const products = await client.fetch(productsQuery);

  return products;
};

export default ProductCategorised;
