"use client";

import React, { useState } from "react";
import { CategoryDropdown } from "./index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const CategoriesHeader = () => {
  const [gamesDd, setGamesDd] = useState(false);
  const [gcDd, setGcDd] = useState(false);
  const [gpDd, setGpDd] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(false);
  const [hoveredIcon1, setHoveredIcon1] = useState(false);
  const [hoveredIcon2, setHoveredIcon2] = useState(false);

  return (
    <>
      <div className="categories-container">
        <div
          className="category games-category"
          onMouseEnter={() => {
            setGamesDd(true);
            setHoveredIcon(true);
          }}
          onMouseLeave={() => {
            setGamesDd(false);
            setHoveredIcon(false);
          }}
        >
          Games
          {hoveredIcon ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
          onMouseEnter={() => {
            setGcDd(true);
            setHoveredIcon1(true);
          }}
          onMouseLeave={() => {
            setGcDd(false);
            setHoveredIcon1(false);
          }}
        >
          Gift Cards
          {hoveredIcon1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
          onMouseEnter={() => {
            setGpDd(true);
            setHoveredIcon2(true);
          }}
          onMouseLeave={() => {
            setGpDd(false);
            setHoveredIcon2(false);
          }}
        >
          Game Points
          {hoveredIcon2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
