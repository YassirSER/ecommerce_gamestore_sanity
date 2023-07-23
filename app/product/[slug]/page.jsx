import React from "react";

import { client } from "../../../lib/client";
import { ProductDetailsClient } from "../../../components/index";

const ProductDetails = async ({ params: { slug } }) => {
  const { products, product } = await getProducts(slug);

  return <ProductDetailsClient products={products} product={product} />;
};

const getProducts = async (slug) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return { products, product };
};

export default ProductDetails;
