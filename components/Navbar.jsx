"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../app/context/stateContext";
import { Cart } from "./index";

import Search from "./Search";
import Logo from "../public/logo-black.png";
import useDeviceSize from "../lib/useDeviceSize";
import Image from "next/image";

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
          <Link href="/">
            <Image src={Logo} style={{ width: "100%", height: "100%" }} />
          </Link>
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
              fill="black"
              stroke="black"
              onClick={showSearchbar}
            />
          </>
        )}
        <button
          className="cart-icon"
          type="button"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping fill="black" stroke="black" />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
