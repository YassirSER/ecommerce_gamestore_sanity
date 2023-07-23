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
        setShowPage({ clicked: "Activation Problems" });
      }}
    >
      Activation Problems
    </span>{" "}
  </div>
);

export default function ActivationProblems({ setShowPage }) {
  const [showAnswers, setShowAnswers] = useState("");
  return (
    <>
      {!showAnswers.length > 0 ? (
        <div className="subquestions-container">
          <NavigationBar
            setShowPage={setShowPage}
            setShowAnswers={setShowAnswers}
          />
          <h4 onClick={(e) => setShowAnswers("I cannot find the key")}>
            <RiArrowRightSLine />I cannot find the key
          </h4>
          <h4 onClick={(e) => setShowAnswers("I cannot activate the key")}>
            <RiArrowRightSLine />I cannot activate the key
          </h4>
        </div>
      ) : (
        <div>
          {showAnswers === "I cannot find the key" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>I cannot find the key</h1>
                <h1>Isn't your purchase a pre-order?</h1>
                <p>
                  Please check if you haven't purchased a pre-order copy. If the
                  product is a pre-order (it hasn't been released yet) you will
                  get your game as soon as the game is released.
                </p>
                <h1>Did you check the spam folder?</h1>
                <p>
                  Sometimes email messages from us can end up in your spam
                  folder. Make sure you searched in there.
                </p>

                <h1>
                  Are you checking the email address you've used to purchase?
                </h1>
                <p>
                  Please make sure that you're checking the inbox of the email
                  that you've used to register the purchase in our page. If you
                  think you've made a mistake while entering the email, please
                  create product delivery ticket.
                </p>
                <h1>
                  Check if the money isn't just reserved/pending or if it hasn't
                  been refunded already.
                </h1>
                <p>
                  There might be cases when technical issues prevent us from
                  delivering the key you've purchased automatically. In those
                  cases, the money will either be refunded or our support team
                  will contact you directly. Please check if you haven't
                  received an email from them already.
                </p>
              </div>
            </>
          )}
          {showAnswers === "I cannot activate the key" && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>I cannot activate the key</h1>
                <h1>Are you activating the game on the right platform?</h1>
                <p>
                  Often customers purchase a product on one platform and try to
                  activate it on another (e.g. Steam key does not work on
                  Origin, etc). Please check again if you're trying to activate
                  your key in the designated platform.
                </p>
                <h1>Did you copy the key correctly?</h1>
                <p>
                  It's easy to make a mistake when rewriting the key. Please
                  check if there are no swapped similar characters, e.g. o the
                  letter and 0 the number, might help.
                </p>
                <h1>Did you try following the key activation guide?</h1>
                <p>
                  <span onClick={() => setShowPage("Activation Guide")}>
                    Activation guides
                  </span>{" "}
                  will help you go through the whole activation process step by
                  step. Please make sure you have tried the steps described
                  there.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
