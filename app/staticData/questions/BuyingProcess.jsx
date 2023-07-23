import React, { useState } from "react";

import { RiArrowRightSLine } from "react-icons/ri";

export const NavigationBar = ({ setShowPage, setShowAnswers }) => (
  <div className="navigator" style={{ color: "grey", fontSize: "0.9rem" }}>
    <span
      onClick={() => {
        setShowAnswers("");
        setShowPage({ clicked: "" });
      }}
    >
      FAQ
    </span>{" "}
    {" > "}{" "}
    <span
      onClick={() => {
        setShowAnswers("");
        setShowPage({ clicked: "Buying Process" });
      }}
    >
      Buying Process
    </span>{" "}
  </div>
);

export default function BuyingProcess({ setShowPage }) {
  const [showAnswers, setShowAnswers] = useState("");
  return (
    <>
      {!showAnswers.length > 0 ? (
        <div className="subquestions-container">
          <NavigationBar
            setShowPage={setShowPage}
            setShowAnswers={setShowAnswers}
          />
          <h4 onClick={(e) => setShowAnswers("How to buy?")}>
            <RiArrowRightSLine />
            How to buy?
          </h4>
          <h4
            onClick={(e) =>
              setShowAnswers(
                "I did not receive any email confirmation of my purchase"
              )
            }
          >
            <RiArrowRightSLine />I did not receive any email confirmation of my
            purchase
          </h4>
        </div>
      ) : (
        <div>
          {showAnswers === "How to buy?" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>How to buy?</h1>
                <p>
                  If you’re new on DIGITALCITY or just not sure where to start,
                  don’t worry! We have this easy step-by-step guide for you to
                  quickly buy the product you want!
                </p>
                <p>
                  You can browse through DIGITALCITY by categories, price, etc.
                  Once you find the game (or bundle) that you like, select it,
                  and you will be taken to the product page. Make sure you won't
                  have any trouble running the game by checking the system
                  specifications.
                </p>
                <p>
                  If you decide to buy the product, don’t forget to scroll down
                  and check other offers. There you can see other Vendors’
                  offers which may differ in sale terms and conditions,
                  including delivery, payment, and return terms.
                </p>
                <p>
                  Once the offer is chosen, click on Add to cart if you want to
                  continue browsing or Buy now and you will be instantly taken
                  to checkout.
                </p>
                <p>
                  In checkout, you can review your order and use a discount code
                  for your purchase. In the next step, select a payment method -
                  DIGITALCITY provides you with many options - and fill in the
                  payment details. When the payment goes through - voila! You
                  have a CD key to activate your product. You can copy the key
                  from the confirmation letter we sent you. You can check these
                  guides on how to activate your product for a specific
                  platform.
                </p>
              </div>
            </>
          )}
          {showAnswers ===
            "I did not receive any email confirmation of my purchase" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  I did not receive any email confirmation of my purchase
                </h1>
                <p>
                  If you did not receive any email confirmation of your
                  purchase, there are a few possible reasons for this:
                </p>
                <p>
                  1. System Failure. It's possible that there was a system error
                  that prevented the email confirmation from being sent. In such
                  cases, the system will automatically refund you if it failed
                  to provide a key.{" "}
                </p>
                <p>
                  2. Payment Processing Time. Depending on the payment method
                  you used, it may take up to 72 hours for the payment to be
                  completed. In such cases, the key will be sent to you once the
                  payment is successfully processed. Please be patient and wait
                  for the payment to be completed.
                </p>
                <p>
                  3. Incomplete Payment: You may not have completed the payment
                  process correctly. Double-check with the payment provider you
                  used to ensure that the payment went through successfully. If
                  there was an issue with the payment, you may need to retry or
                  choose an alternative payment method.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
