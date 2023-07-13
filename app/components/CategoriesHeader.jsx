"use client";

import React, { useState } from "react";
import { CategoryDropdown } from "./index";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const CategoriesHeader = () => {
  const [gamesDd, setGamesDd] = useState(false);
  const [gcDd, setGcDd] = useState(false);
  const [gpDd, setGpDd] = useState(false);

  return (
    <>
      <div className="categories-container">
        <div
          className="category games-category"
          onMouseEnter={() => setGamesDd(true)}
          onMouseLeave={() => setGamesDd(false)}
        >
          Games
          <IoIosArrowDown />
          {gamesDd && (
            <div className="games-data">
              <CategoryDropdown
                categoryType={"game-category"}
                category={"gameCategories"}
              />
            </div>
          )}
        </div>
        <div
          className="category giftcards-category"
          onMouseEnter={() => setGcDd(true)}
          onMouseLeave={() => setGcDd(false)}
        >
          Gift Cards
          <IoIosArrowDown />
          {gcDd && (
            <div className="games-data">
              <CategoryDropdown
                categoryType={"game-category"}
                category={"gcCategories"}
              />
            </div>
          )}
        </div>
        <div
          className="category gp-category"
          onMouseEnter={() => setGpDd(true)}
          onMouseLeave={() => setGpDd(false)}
        >
          Game Points
          <IoIosArrowDown />
          {gpDd && (
            <div className="games-data">
              <CategoryDropdown
                categoryType={"game-category"}
                category={"gpCategories"}
              />
            </div>
          )}
        </div>
        <Link href="/products/software" className="category software-category">
          Software
        </Link>
      </div>
    </>
  );
};

export default CategoriesHeader;
