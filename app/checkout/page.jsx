"use client";

import React from "react";

import { useStateContext } from "../context/stateContext";
import { urlFor } from "../../lib/client";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";

const Checkout = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="checkout-products-container">
      {cartItems.length >= 1 &&
        cartItems.map((item) => (
          <div>
            <div className="product" key={item._id}>
              <img
                src={urlFor(item?.image[0])}
                className="cart-product-image"
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.price}MAD</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      <div className="total">
        <h3>Subtotal:</h3>
        <h3>{totalPrice}MAD</h3>
      </div>
    </div>
  );
};

export default Checkout;
