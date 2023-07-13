import React from "react";
import { client } from "../lib/client";

import {
  Product,
  FooterBanner,
  Category,
  HeroBanner,
} from "./components/index";
import Link from "next/link";

export const revalidate = 0;

const Home = async () => {
  const xboxquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["xboxgames"]]) > 0] {
    name,
    price,
    image,
    slug
  } | order(_id) [0...5]`;
  const xboxProductsData = await client.fetch(xboxquery);

  const psquery = `*[_type=="product" && count((categories[]->slug.current)[@ in ["psngames"]]) > 0] {
    name,
    price,
    image,
    slug
  } | order(_id) [0...5]`;
  const psProductsData = await client.fetch(psquery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="famous-categories-heading">
        <h2>FAMOUS CATEGORIES</h2>
      </div>

      <div className="famous-categories-container">
        {categoryData?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
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
