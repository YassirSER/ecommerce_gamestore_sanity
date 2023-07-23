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
        setShowPage({ clicked: "Payment" });
      }}
    >
      Payment
    </span>{" "}
  </div>
);

export default function Payment({ setShowPage }) {
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
              setShowAnswers("What should I do if my transaction has failed?")
            }
          >
            <RiArrowRightSLine />
            What should I do if my transaction has failed?
          </h4>
          <h4
            onClick={(e) =>
              setShowAnswers("Can I get a refund after displaying my key?")
            }
          >
            <RiArrowRightSLine />
            Can I get a refund after displaying my key?
          </h4>
          <h4 onClick={(e) => setShowAnswers("Credit or debit card")}>
            <RiArrowRightSLine />
            Credit or debit card
          </h4>
        </div>
      ) : (
        <div>
          {showAnswers === "What should I do if my transaction has failed?" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  What should I do if my transaction has failed?
                </h1>
                <p>
                  In case the transaction was rejected please make sure that:
                  <ul>
                    <li>You have enough balance available;</li>
                    <li>You have provided correct personal information;</li>
                  </ul>
                  If all of the above are correct, your balance will be returned
                  to your account. In case you haven't received it back, please
                  contact our Support Team.
                </p>
              </div>
            </>
          )}
          {showAnswers === "Can I get a refund after displaying my key?" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  Can I get a refund after displaying my key?
                </h1>
                <p>
                  Once a key has been displayed or revealed, it is generally not
                  possible to obtain a refund. The reason for this is that once
                  the key has been revealed, it is considered used or activated
                  and the product is considered to have been delivered.
                </p>
                <p>
                  However, if you no longer need or want the key, you may have
                  the option to give it to a friend or sell it to someone else.
                  This way, you can still find a use for the key.
                </p>
              </div>
            </>
          )}
          {showAnswers === "Credit or debit card" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>Credit or debit card</h1>
                <p>
                  The credit or debit card payment method allows users to draw
                  on funds that are deposited at the bank. If you don’t want to
                  register or log into your DigitalCity account, a credit/debit
                  card is a fine option. This payment method allows the usage of
                  Visa, MasterCard, or Maestro debit/credit cards.
                </p>
                <h1>How to pay using a credit/debit card?</h1>
                <ul>
                  <li>Select products and add them to the cart</li>
                  <li>Proceed to checkout</li>
                  <li>Select ‘Credit or debit card’ as your payment method</li>
                  <li>
                    Fill in your credit/debit card information in the required
                    fields
                  </li>
                  <li>Press ‘Continue’ to complete your payment</li>
                  <li>Enjoy your purchase</li>
                </ul>
                <h1>In what regions is this payment method available?</h1>
                <p>
                  Visa, MasterCard, and Maestro cards are well-accepted
                  internationally in most regions of the world, therefore, the
                  payment method should not be restricted based on the region.
                  However, if the payment is halted, it may be that the card
                  used for the transaction is region-locked or other issues are
                  preventing the cardholder from using the card in question. In
                  that case, we advise contacting your bank and/or choosing
                  another payment method.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
