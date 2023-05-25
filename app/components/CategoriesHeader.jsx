import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CategoriesHeader = () => {
  const pathname = usePathname();

  return (
    <div className="categories-container">
      <div className="category">
        <Link
          href="/products/xboxgame"
          className={pathname.startsWith("/products/xboxgame") ? "active" : ""}
        >
          Xbox games
        </Link>
      </div>
      <div className="category">
        <Link
          href="/products/steamgame"
          className={pathname.startsWith("/products/steamgame") ? "active" : ""}
        >
          Steam games
        </Link>
      </div>
      <div className="category">
        <Link
          href="/products/psgame"
          className={pathname.startsWith("/products/psgame") ? "active" : ""}
        >
          {" "}
          PS games{" "}
        </Link>
      </div>
      <div className="category">
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

export default CategoriesHeader;
