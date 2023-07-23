import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const MaylikeProducts = ({ product }) => {
  return (
    <div key={product.slug.current}>
      <Link
        href={`/product/${product.slug.current}`}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="maylike-product-card">
          <img
            src={urlFor(product.image && product.image[0]).url()}
            width={190}
            height={230}
            className="maylike-product-image"
            alt={product.name}
          />
          <p className="maylike-product-name">{product.name}</p>
          <p className="maylike-product-price">{product.price}MAD</p>
        </div>
      </Link>
    </div>
  );
};

export default MaylikeProducts;
