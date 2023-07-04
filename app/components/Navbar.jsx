"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStateContext } from "../context/stateContext";
import { Cart } from "./index";

import Search from "./Search";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    setShowSideMenu,
    showSideMenu,
  } = useStateContext();
  const navbar = useRef();
  const hambLine = useRef();
  const [searchParam, setSearchParam] = useState("");
  const [searchIconState, setSearchIconState] = useState("search");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?name=${encodeURIComponent(searchParam)}`);
    setSearchParam("");
  };

  const showSearchbar = (e) => {
    e.preventDefault();
    let navbarNode = navbar.current;

    navbarNode.classList.toggle("opensearch");
    // logoNode.classList.toggle("opensearch");

    if (navbarNode.classList.contains("opensearch")) {
      setSearchIconState("times");
    } else {
      setSearchIconState("search");
    }
  };

  const handleChange = (e) => {
    setShowSideMenu((current) => !current);
  };

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
          <Link href="/">GameStore</Link>
        </p>

        <input
          type="text"
          className="big-input"
          placeholder="Search..."
          onChange={(e) => setSearchParam(e.target.value)}
          onSubmit={handleSubmit}
          ref={navbar}
        />

        <Search inputClassname="searchbar" />
      </div>

      <div>
        {searchIconState === "search" ? (
          <IoSearchOutline className="search-icon-sm" onClick={showSearchbar} />
        ) : (
          <FaTimes
            className="times-icon-sm"
            color="black"
            onClick={showSearchbar}
          />
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
