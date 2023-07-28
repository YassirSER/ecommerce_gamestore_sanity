"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useStateContext } from "../context/stateContext";
import { urlFor } from "../../lib/client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { GiTrashCan } from "react-icons/gi";
import Link from "next/link";

const Cart = () => {
  const { totalPrice, cartItems, toggleCartItemQuantity, onRemove } =
    useStateContext();

  const router = useRouter();

  return (
    <div className="cart-page-container">
      <div className="cart-products-container">
        <h2 className="cart-products-header">Products</h2>
        <div className="product-container-fit">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="checkout-product-image"
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
      </div>
      <div className="total-container">
        <h2 style={{ fontSize: "1rem" }}>TOTAL CART</h2>
        <div className="checkout-total">
          <p>TOTAL</p>
          <div className="subtotal">{totalPrice}MAD</div>
        </div>
        <button
          className="purchase-btn"
          // disabled={totalPrice > 0 ? false : true}
        >
          <Link href={totalPrice > 0 ? "/checkout" : "/"}>PURCHASE</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
