"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import XboxBanner from "../public/digitalcitybanner1.png";
import PsnBanner from "../public/psdigitalcitybanner.png";

const HeroBanner = () => {
  const [banner, setBanner] = useState("xbox");

  const bannerSetter = () => {
    if (banner === "xbox") {
      return XboxBanner;
    } else {
      return PsnBanner;
    }
  };
  return (
    <div>
      <div className="hero-banner-container">
        <Link href={"/products/" + banner + "games"}>
          <Image
            src={bannerSetter()}
            alt={"digital city " + banner + " games and gift cards"}
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="hero-banner-buttons">
          <button
            className={banner === "xbox" ? "hero-btn active-hero" : "hero-btn"}
            onClick={() => setBanner("xbox")}
          ></button>
          <button
            className={banner === "psn" ? "hero-btn active-hero" : "hero-btn"}
            onClick={() => setBanner("psn")}
          ></button>
          {/* <button className="hero-btn" onClick={() => setBanner("xboxbanner")}></button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
