"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../app/context/stateContext";
import { Cart } from "./index";

import Search from "./Search";
import useDeviceSize from "../lib/useDeviceSize";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    setShowSideMenu,
    showSideMenu,
    showSearchbarState,
    setShowSearchbarState,
  } = useStateContext();
  const [searchIconState, setSearchIconState] = useState("search");

  const [width, height] = useDeviceSize();

  const showSearchbar = (e) => {
    e.preventDefault();

    if (searchIconState === "search") {
      setSearchIconState("times");
      setShowSearchbarState(true);
    } else {
      setSearchIconState("search");
      setShowSearchbarState(false);
    }
  };

  const handleChange = (e) => {
    setShowSideMenu((current) => !current);
  };

  const isMobile = width <= 800;

  return (
    <nav className="navbar-container">
      <div className="logo-searchbar-container">
        {showSideMenu ? (
          <FaTimes
            onClick={handleChange}
            style={{ fontSize: "1.3rem" }}
            className="times-icon"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleChange}
            style={{ fontSize: "1.3rem" }}
            className="hamburger-icon"
          />
        )}
        <p className="logo">
          <Link href="/">Digital City</Link>
        </p>

        {isMobile ? (
          <Search appearance="mobile" />
        ) : (
          <Search appearance="desktop" />
        )}
      </div>

      <div>
        {searchIconState === "search" ? (
          <IoSearchOutline className="search-icon-sm" onClick={showSearchbar} />
        ) : (
          <>
            {/* <Search appearance="mobile" /> */}
            <FaTimes
              className="times-icon-sm"
              // color="black"
              fill="white"
              stroke="white"
              onClick={showSearchbar}
            />
          </>
        )}
        <button
          className="cart-icon"
          type="button"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
