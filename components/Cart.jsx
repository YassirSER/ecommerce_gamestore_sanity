"use client";

import React, { useRef, useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";

import { GiTrashCan } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useStateContext } from "../app/context/stateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const router = useRouter();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (!cartRef.current.contains(e.target)) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container" ref={cartRef}>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 ? (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <img
                    src={urlFor(item?.image[0])}
                    className="cart-product-image"
                    width={80}
                    height={100}
                    onClick={() => router.push("/product/" + item.slug.current)}
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <GiTrashCan />
                      </button>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <h4>{item.price}MAD</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>{totalPrice}MAD</h3>
            </div>
            <div className="btn-container">
              <Link href="/cart">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowCart(false)}
                >
                  Show cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
