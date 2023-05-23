import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]).url()}
            width={190}
            height={230}
            className="product-image"
            alt={name}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price}MAD</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
