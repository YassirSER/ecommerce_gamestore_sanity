"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStateContext } from "../context/stateContext";
import { CategoryDropdown } from ".";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SideMenu = () => {
  const pathname = usePathname();
  const menuRef = useRef();
  const { setShowSideMenu } = useStateContext();

  const [gamesDd, setGamesDd] = useState("");
  const [title, setTitle] = useState("Categories");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setShowSideMenu(false);
    }
  };

  return (
    <>
      <div className="menu" ref={menuRef}>
        <div className="menu-category upper-category">
          {title === "Categories" ? (
            <h2>Categories</h2>
          ) : (
            <div
              className="upper-cat-container"
              onClick={() => {
                setTitle("Categories");
                setGamesDd("");
              }}
            >
              <MdKeyboardArrowLeft style={{ fontSize: "25px" }} />
              <h2>{title}</h2>
            </div>
          )}
        </div>
        {gamesDd.length > 0 ? (
          <CategoryDropdown categoryType={"menu-category"} category={gamesDd} />
        ) : (
          <>
            <div
              className="menu-category"
              onClick={() => {
                setGamesDd("gameCategories");
                setTitle("Games");
              }}
            >
              Games
              <MdKeyboardArrowRight className="arrow-right" />
            </div>
            <div
              className="menu-category"
              onClick={() => {
                setGamesDd("gcCategories");
                setTitle("Gift Cards");
              }}
            >
              Gift Cards
              <MdKeyboardArrowRight className="arrow-right" />
            </div>
            <div
              className="menu-category"
              onClick={() => {
                setGamesDd("gpCategories");
                setTitle("Game Points");
              }}
            >
              Game Points
              <MdKeyboardArrowRight className="arrow-right" />
            </div>
            <Link
              href={"/products/software"}
              className="menu-category bottom-category"
            >
              Software
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SideMenu;
