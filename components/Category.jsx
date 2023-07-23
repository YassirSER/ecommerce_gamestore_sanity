import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Category = ({ category }) => {
  return (
    category.image && (
      <div>
        <Link href={`/products/${category.slug.current}`}>
          <div className="category-card">
            <img
              src={urlFor(category.image && category.image[0]).url()}
              width={190}
              height={230}
              className="category-image"
              alt={category.name}
            />
            {/* <p className="category-name">{category.name}</p> */}
          </div>
        </Link>
      </div>
    )
  );
};

export default Category;
