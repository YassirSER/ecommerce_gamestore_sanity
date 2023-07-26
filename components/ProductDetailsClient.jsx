"use client";

import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import Product from "./Product";
import { urlFor } from "../lib/client";
import { useStateContext } from "../app/context/stateContext";
import { MaylikeProducts } from "./index";

import Europe from "../public/europe.svg";
import Argentina from "../public/argentina.svg";
import Turkey from "../public/turkey.svg";
import Global from "../public/global.svg";
import Link from "next/link";

const ProductDetailsClient = ({ products, product }) => {
  const { image, name, details, price, region } = product;
  const [index, setIndex] = useState(0);

  const { decQty, incQty, qty, onAdd } = useStateContext();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      // slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
    },
    semiMobile: {
      breakpoint: { max: 600, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };
  const productsData = products.map((item) => (
    <MaylikeProducts key={item._id} product={item} />
  ));

  const findRegion = () => {
    if (region === "EUROPE") {
      return Europe;
    } else if (region === "ARGENTINA") {
      return Argentina;
    } else if (region === "TURKEY") {
      return Turkey;
    } else if (region === "GLOBAL") {
      return Global;
    }
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index]).url()}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <p style={{ display: "flex", alignItems: "center" }}>
            {/* Region:{" "} */}
            <Image
              src={findRegion()}
              style={{
                width: "40px",
                height: "40px",
                padding: region === "GLOBAL" ? "10px" : "0",
              }}
            />{" "}
            <span
              style={{
                color: "#05b293",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              {region}
            </span>
          </p>
          <h4>Details: </h4>
          <p>{details}</p>
          <h4>How to activate: </h4>
          <p>
            to activate the product, please check the{" "}
            <Link href={"/faq"} style={{ color: "blueviolet" }}>
              faq's
            </Link>{" "}
            activation guide.
          </p>
          <p className="price">{price}MAD</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <Carousel responsive={responsive}>{productsData}</Carousel>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
