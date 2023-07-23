"use client";

import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { RiMailLockLine } from "react-icons/ri";
import { TbKeyOff } from "react-icons/tb";
import { FaCartArrowDown, FaBookOpen } from "react-icons/fa";

import {
  ActivationProblems,
  Payment,
  ActivationGuide,
  BuyingProcess,
  ProductDelivery,
} from "../staticData/questions/index";

const Faq = () => {
  const [showPage, setShowPage] = useState({ clicked: "" });

  console.log(showPage);

  return (
    <>
      {!showPage.clicked.length > 0 ? (
        <div className="about-container">
          <h1>FAQ</h1>
          <div className="qa-container">
            <div
              className="questions"
              onClick={() => setShowPage({ clicked: "Activation Problems" })}
            >
              <TbKeyOff style={{ width: "60px", height: "60px" }} />
              <p>Activation Problems</p>
            </div>
            <div
              className="questions"
              onClick={(e) => setShowPage({ clicked: "Payment" })}
            >
              <MdOutlinePayment style={{ width: "60px", height: "60px" }} />
              <p>Payment</p>
            </div>
            <div
              className="questions"
              onClick={(e) => setShowPage({ clicked: "Product Delivery" })}
            >
              <RiMailLockLine style={{ width: "60px", height: "60px" }} />
              <p>Product Delivery</p>
            </div>
            <div
              className="questions"
              onClick={(e) => setShowPage({ clicked: "Buying Process" })}
            >
              <FaCartArrowDown style={{ width: "60px", height: "60px" }} />
              <p>Buying Process</p>
            </div>
            <div
              className="questions"
              onClick={(e) => setShowPage({ clicked: "Activation Guide" })}
            >
              <FaBookOpen style={{ width: "60px", height: "60px" }} />
              <p>Activation Guide</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="qa-container">
          {showPage.clicked === "Activation Problems" && (
            <ActivationProblems setShowPage={setShowPage} />
          )}
          {showPage.clicked === "Payment" && (
            <Payment setShowPage={setShowPage} />
          )}
          {showPage.clicked === "Activation Guide" && (
            <ActivationGuide setShowPage={setShowPage} />
          )}
          {showPage.clicked === "Buying Process" && (
            <BuyingProcess setShowPage={setShowPage} />
          )}
          {showPage.clicked === "Product Delivery" && (
            <ProductDelivery setShowPage={setShowPage} />
          )}
        </div>
      )}
    </>
  );
};

export default Faq;
