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

      <div className="blabla-container">
        <h1 style={{ fontWeight: "800", fontSize: "1.8rem" }}>
          DIGITALCITY.MA, the best website for prepaid cards and activation keys
          in Morocco
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <p>
            Wether it is gift cards, games,{" "}
            <Link href={"/software"}>Software</Link>, or anything digital, we
            have it all !
          </p>
          <p>
            You can find everything for the best price in{" "}
            <Link href={"http://localhost:3000"}>DIGITALCITY.MA</Link>, and all
            our products are delivered digitally in a matter of a day !
          </p>
          <p>
            <Link href={"/products/psngiftcards"}>PSN Cards</Link>,{" "}
            <Link href={"/products/psngames"}>PLAYSTATION GAMES</Link>,{" "}
            <Link href={"/products/xboxgames"}>XBOX GAMES</Link>,{" "}
            <Link href={"/products/epicgames"}>EPIC GAMES</Link>...
          </p>
          <p>
            Tired of your console ? we have{" "}
            <Link href={"/products/robloxrobuxgiftcards"}>robux</Link>,{" "}
            <Link href={"/products/fortnitevbuckscards"}>V-BUCKS</Link>,{" "}
            <Link href={"/products/netflixgiftcards"}>NETFLIX cards</Link>,{" "}
            <Link href={"/products/itunesgiftcards"}>Apple & Itunes Cards</Link>
            , and it's only the tip of the iceberg !
          </p>
          <p>
            Still want more ?! Okay, what about game points ? wether it is{" "}
            <Link href={"/products/fifafutpoints"}>FIFA FUT points</Link>,{" "}
            <Link href={"/products/gtaonlinecash"}>GTA online cash</Link> or{" "}
            <Link href={"/products/riotpoints"}>Riot Points</Link>... just ask
            and you shall find.
          </p>
          <p>
            You might ask, what about pc ?We got you.{" "}
            <Link href={"/products/battle.netgames"}>BATTLE.NET</Link>,{" "}
            <Link href={"/products/steamgames"}>STEAM</Link> as well as{" "}
            <Link href={"/products/goggames"}>GOG games</Link> are also appart
            of our catalog !
          </p>
        </div>
        <p
          style={{
            width: "100%",
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "30px",
          }}
        >
          IWA CHNO MAZAL KATSNA, SIR 5ODLK CHI 7AJA !
        </p>
      </div>
    </>
  );
};

export default Home;
