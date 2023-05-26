"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../context/stateContext";
import { SearchBar, Cart } from "./index";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo-searchbar-container">
        <p className="logo">
          <Link href="/">GameStore</Link>
        </p>

        <SearchBar />
      </div>

      <button
        className="cart-icon"
        type="button"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
