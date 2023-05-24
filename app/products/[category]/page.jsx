import React from "react";

import { client } from "../../../lib/client";
import CategorisedProducts from "./CategorisedProducts";

const ProductCategorised = async ({ params: { category } }) => {
  const products = await getProductsByCategory(category);

  return <CategorisedProducts products={products} />;
};

const getProductsByCategory = async (category) => {
  const productsQuery = `*[_type == "product" && category == "${category}"]`;

  const products = await client.fetch(productsQuery);

  return products;
};

export default ProductCategorised;
