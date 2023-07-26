import React from "react";

import { client } from "../lib/client";
import InstantDelivery from "../public/fastDelivery.svg";
import SecurePayment from "../public/securePayment.svg";
import customerService from "../public/customerService.svg";

import {
  Product,
  FooterBanner,
  Category,
  HeroBanner,
  DownCategories,
} from "../components/index";
// import HeroBanner from "../components/HeroBanner";

import Link from "next/link";
import Image from "next/image";
// import DownCategories from "../components/downCategories";
// import { Metadata } from "next";

export const metadata = {
  title: "digital city homepage",
  description: "digital city homepage xbox games and psn games for cheap !",
};

export const revalidate = 60;

const xboxquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["xboxgames"]]) > 0] {
  name,
  price,
  image,
  region,
  slug
} | order(_id) [0...5]`;

const psquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["psngames"]]) > 0] {
  name,
  price,
  image,
  slug,
  region
} | order(_id) [0...5]`;

const Home = async () => {
  const xboxProductsData = await client.fetch(xboxquery);
  const psProductsData = await client.fetch(psquery);

  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  // const headersList = headers();
  // const userAgent = headersList.get("user-agent");

  return (
    <>
      <HeroBanner />

      <DownCategories />
      {/* <div className="requestgame-container">
        <h2 style={{ fontSize: "2rem", padding: "20px" }}>
          Didn't find what you wish for ?
        </h2>
        <h4 style={{ padding: "20px" }}>
          you can make a custom request at our{" "}
          <Link href={"/contact"} style={{ color: "blueviolet" }}>
            contact
          </Link>{" "}
          page
        </h4>
      </div> */}

      <div className="famous-categories-heading">
        <h2>CATEGORIES</h2>
      </div>

      <div className="famous-categories-container">
        {categoryData?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>

      <div className="instantdelivery-container">
        <div>
          <Image src={SecurePayment} alt="secure payment icon" />
          <h4 style={{ padding: "5px" }}>SECURE PAYMENT</h4>
        </div>
        <div>
          <Image
            src={InstantDelivery}
            className="instantdelivery"
            alt="fast delivery icon"
          />
          <h4 style={{ padding: "10px" }}>FAST DELIVERY</h4>
        </div>
        <div>
          <Image src={customerService} alt="customer service icon" />
          <h4 style={{ padding: "10px" }}>CUSTOMER SERVICE</h4>
        </div>
      </div>

      <div className="products-heading">
        <h2>GAMES / XBOX</h2>
        <Link href={"/products/xboxgames"} className="seemore">
          More
        </Link>
      </div>

      <div className="products-container">
        {xboxProductsData?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className="products-heading">
        <h2>GAMES / PLAYSTATION</h2>
        <Link href={"/products/psngames"} className="seemore">
          More
        </Link>
      </div>

      <div className="products-container">
        {psProductsData?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  );
};

export default Home;
