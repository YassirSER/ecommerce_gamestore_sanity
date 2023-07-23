"use client";

import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/stateContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const OrderComplete = () => {
  const { order } = useStateContext();
  const router = useRouter();
  // const searchParams = useSearchParams();

  const [isAllowed, setIsAllowed] = useState(true);

  // const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!order?.orderId) {
      // router.push("/");
      setIsAllowed(false);
    }
  }, []);
  return isAllowed ? (
    <div className="order-complete-container">
      <h1>Thanks for your order !</h1>
      <h4>
        We will be sending you your product/s activation key shortly at{" "}
        {order?.email} so please standby !
      </h4>
      <div className="order-complete-buttons">
        <button>
          <Link href={"/"}>go back to the website</Link>
        </button>
        <button>
          <Link href={"/faq"}>FAQ</Link>
        </button>
        <button>
          <Link href={"/contact"}>Contact Us</Link>
        </button>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h4>There was an error somewhere, please go back to the homepage</h4>
    </div>
  );
};

export default OrderComplete;
