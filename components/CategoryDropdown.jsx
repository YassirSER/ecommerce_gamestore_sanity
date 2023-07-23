"use client";

import React from "react";
import {
  gameCategories,
  gcCategories,
  gpCategories,
} from "../app/staticData/categories";
// import "../styles/CategoriesDropdown.css";
import Link from "next/link";

function Dropdown({ category, categoryType }) {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  const toSlug = (name) =>
    name.toLowerCase().replaceAll(" ", "").replaceAll("-", "");

  const getData = () => {
    if (category === "gameCategories") {
      return gameCategories;
    } else if (category === "gcCategories") {
      return gcCategories;
    } else if (category === "gpCategories") {
      return gpCategories;
    }
  };

  const data = getData();

  return (
    <>
      {data.map((item) => (
        <div className={categoryType}>
          <Link href={`/products/${toSlug(item)}`} key={item}>
            {item}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Dropdown;
