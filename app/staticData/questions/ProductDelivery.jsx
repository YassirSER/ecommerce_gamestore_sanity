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
        setShowPage({ clicked: "Product Delivery" });
      }}
    >
      Product Delivery
    </span>{" "}
  </div>
);

export default function ProductDelivery({ setShowPage }) {
  const [showAnswers, setShowAnswers] = useState("");
  return (
    <>
      {!showAnswers.length > 0 ? (
        <div className="subquestions-container">
          <NavigationBar
            setShowPage={setShowPage}
            setShowAnswers={setShowAnswers}
          />
          <h4
            onClick={(e) =>
              setShowAnswers(
                "Can I get a refund on Steam for a game bought on Digital City?"
              )
            }
          >
            <RiArrowRightSLine />
            Can I get a refund on Steam for a game bought on Digital City?
          </h4>
          <h4
            onClick={(e) =>
              setShowAnswers(
                "Where can I find the product key that I purchased?"
              )
            }
          >
            <RiArrowRightSLine />
            Where can I find the product key that I purchased?
          </h4>
          <h4
            onClick={(e) =>
              setShowAnswers("I don't want to play the game anymore")
            }
          >
            <RiArrowRightSLine />I don't want to play the game anymore
          </h4>
        </div>
      ) : (
        <div>
          {showAnswers ===
            "Can I get a refund on Steam for a game bought on Digital City?" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  Can I get a refund on Steam for a game bought on Digital City?
                </h1>
                <p>
                  Since the products you can find in our marketplace come in the
                  form of a digital key and their acquisition method on Steam is
                  interpreted as retail, you won't be able to apply for a refund
                  on their platform.
                </p>
              </div>
            </>
          )}
          {showAnswers ===
            "Where can I find the product key that I purchased?" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  Where can I find the product key that I purchased?
                </h1>
                <p>
                  After purchasing on DigitalCity, you will receive your product
                  key in your written email when making a purchase (it might be
                  delivered to the spam/junk folder).
                </p>
                <p>
                  Please keep in mind that pre-ordered keys will be delivered on
                  the day the game launches. You can find more information about
                  pre-ordered games here.
                </p>
              </div>
            </>
          )}
          {showAnswers === "I don't want to play the game anymore" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  I don't want to play the game anymore
                </h1>
                <p>
                  In cases when a product key is already displayed, we are
                  unfortunately unable to offer a refund. A product key can only
                  be returned to receive a refund in two cases:
                </p>
                <ul>
                  <li>Before the product code is viewed.</li>
                  <li>
                    If there's an issue with the product code itself (it is
                    either invalid or previously used).
                  </li>
                </ul>
                <p>
                  Keep in mind that we are a digital key marketplace, not a
                  platform, and the seller of your product is not a direct
                  publisher of the key, thus, they do not have any technical
                  means to revoke or deactivate your key.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
