import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  // const findRegion = () => {
  //   if (region === "EUROPE") {
  //     return Europe;
  //   } else if (region === "ARGENTINA") {
  //     return Argentina;
  //   } else if (region === "TURKEY") {
  //     return Turkey;
  //   } else if (region === "GLOBAL") {
  //     return Global;
  //   }
  // };
  return (
    <div key={product.slug.current}>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(product.image && product.image[0]).url()}
            width={190}
            height={230}
            className="product-image"
            alt={product.name}
          />
          <p className="product-name">{product.name}</p>
          <p className="product-region">
            {product.region}
            {/* <Image src={findRegion()} alt="region" /> */}
          </p>
          <p className="product-price">{product.price}MAD</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
