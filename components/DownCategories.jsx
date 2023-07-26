import Image from "next/image";
import Link from "next/link";
import React from "react";

import NetflixBg from "../public/netflixbg.png";
import ItunesBg from "../public/itunesbg.png";

const DownCategories = () => {
  return (
    <div className="down-categories-container">
      <Link
        href={"/products/itunesgiftcards"}
        style={{ gridColumnStart: "1" }}
        className="itunesbg"
      >
        <Image
          src={ItunesBg}
          alt="apple/itunes products and gift cards digitalcity.ma"
        />
      </Link>
      <Link
        href={"/products/netflixgiftcards"}
        // style={{ gridColumnStart: "2" }}
        className="netflixbg"
      >
        <Image
          src={NetflixBg}
          alt="netflix products and gift cards digitalcity.ma"
        />
      </Link>
    </div>
  );
};

export default DownCategories;
