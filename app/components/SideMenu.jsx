"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStateContext } from "../context/stateContext";

const SideMenu = () => {
  const pathname = usePathname();
  const menuRef = useRef();
  const { setShowSideMenu } = useStateContext();

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
    <div className="menu" ref={menuRef}>
      <div className="menu-category">
        <Link
          href="/products/xboxgame"
          className={pathname.startsWith("/products/xboxgame") ? "active" : ""}
        >
          Xbox games
        </Link>
      </div>
      <div className="menu-category">
        <Link
          href="/products/steamgame"
          className={pathname.startsWith("/products/steamgame") ? "active" : ""}
        >
          Steam games
        </Link>
      </div>
      <div className="menu-category">
        <Link
          href="/products/psgame"
          className={pathname.startsWith("/products/psgame") ? "active" : ""}
        >
          PS games
        </Link>
      </div>
      <div className="menu-category bottom-category">
        <Link
          href="/products/software"
          className={pathname.startsWith("/products/software") ? "active" : ""}
        >
          Software
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
