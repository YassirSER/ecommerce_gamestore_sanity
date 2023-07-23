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
} from "../components/index";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

const xboxquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["xboxgames"]]) > 0] {
  name,
  price,
  image,
  slug
} | order(_id) [0...5]`;

const psquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["psngames"]]) > 0] {
  name,
  price,
  image,
  slug
} | order(_id) [0...5]`;

const Home = async () => {
  const xboxProductsData = await client.fetch(xboxquery);
  const psProductsData = await client.fetch(psquery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="requestgame-container">
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
      </div>

      <div className="famous-categories-heading">
        <h2>CATEGORIES</h2>
      </div>

      <div className="famous-categories-container">
        {categoryData?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>

      <div className="instantdelivery-container">
        <Image
          src={SecurePayment}
          style={{ width: "150px", height: "100px" }}
          alt="secure payment icon"
        />
        <Image
          src={InstantDelivery}
          className="instantdelivery"
          width={200}
          style={{ height: "100px", width: "150px" }}
          alt="fast delivery icon"
        />
        <Image
          src={customerService}
          style={{ height: "100px", width: "150px" }}
          alt="customer service icon"
        />
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
