import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";

//img's imports
import { RiArrowRightSLine } from "react-icons/ri";
import AmazonAg1 from "../images/amazon-ag-1.png";
import AmazonAg2 from "../images/amazon-ag-2.png";
import AmazonAg3 from "../images/amazon-ag-3.png";
import itunesAg1 from "../images/itunes-ag-1.png";
import itunesAg2 from "../images/itunes-ag-2.png";
import xboxAg1 from "../images/xbox-ag-1.png";
import xboxAg2 from "../images/xbox-ag-2.png";
import battlenetAg1 from "../images/battlenet-ag-1.png";
import battlenetAg2 from "../images/battlenet-ag-2.png";
import psnAg1 from "../images/psn-ag-1.png";
import psnAg2 from "../images/psn-ag-2.png";
import psnAg3 from "../images/psn-ag-3.png";
import psnAg4 from "../images/psn-ag-4.png";
import epicAg1 from "../images/epic-ag-1.jpg";
import epicAg2 from "../images/epic-ag-2.jpg";

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
        setShowPage({ clicked: "Activation Guide" });
      }}
    >
      Activation Guide
    </span>{" "}
  </div>
);

export default function ActivationGuide({ setShowPage }) {
  const [showAnswers, setShowAnswers] = useState(0);
  return (
    <>
      {!showAnswers > 0 ? (
        <div className="subquestions-container">
          <NavigationBar
            setShowPage={setShowPage}
            setShowAnswers={setShowAnswers}
          />
          <h4 onClick={(e) => setShowAnswers(1)}>
            <RiArrowRightSLine />
            Amazon Gift Card Activation
          </h4>
          <h4 onClick={(e) => setShowAnswers(2)}>
            <RiArrowRightSLine />
            Apple & iTunes Gift Card Activation
          </h4>
          <h4 onClick={(e) => setShowAnswers(3)}>
            <RiArrowRightSLine />
            Xbox Key Activation
          </h4>
          <h4 onClick={(e) => setShowAnswers(4)}>
            <RiArrowRightSLine />
            Battle.net Key Activation
          </h4>
          <h4 onClick={(e) => setShowAnswers(5)}>
            <RiArrowRightSLine />
            PSN (Playstation Network) Key Activation
          </h4>
          <h4 onClick={(e) => setShowAnswers(6)}>
            <RiArrowRightSLine />
            Epic Games Key Activation
          </h4>
        </div>
      ) : (
        <div>
          {showAnswers === 1 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  Amazon Gift Card Activation
                </h1>
                <p>
                  In order to activate your Amazon gift card, follow these
                  steps:
                </p>
                <p>1. Log into your Amazon account.</p>
                <p>
                  2. Search for the Gift Card section on the page (you can find
                  it here).
                </p>
                <Image
                  src={AmazonAg1}
                  alt="amazon activation guide redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
                <p>
                  3. There you will find a Redeem Amazon Gift Cards button (you
                  can find it here)
                </p>
                <Image
                  src={AmazonAg2}
                  alt="amazon activation guide redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
                <p>
                  4. Redeem a gift card window will pop. There you will be able
                  to enter your gift card code.
                </p>
                <Image
                  src={AmazonAg3}
                  alt="amazon activation guide redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
                <p style={{ fontWeight: 800 }}>
                  Bear in mind that your gift card must match the region/country
                  you are in. For example, if your Amazon account is German your
                  card must be for Germany. We suggest always checking the
                  restriction of the gift card.
                </p>
              </div>
            </>
          )}
          {showAnswers === 2 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  Apple & iTunes Gift Card Activation
                </h1>
                <h1>Apple iTunes Gift Card Activation</h1>
                <p>
                  To activate an Apple iTunes Card, you will need to have your
                  iTunes app (If you don't have an account, it can be created on
                  this link here) and follow these steps:
                </p>
                <p>1. Log in to your iTunes account.</p>
                <p>
                  2. Go to the Store section of the app. There you will find a
                  Redeem button, select it.
                </p>
                <Image src={itunesAg1} alt="itunes redeem gift card" />
                <p>
                  3.Once you are there a redeem section should show up. There
                  you will need to enter your Gift Card code.
                </p>
                <Image src={itunesAg2} alt="itunes redeem gift card" />
                <p>
                  Please bear in mind that your gift card must match the
                  region/country you are located in. We suggest always checking
                  the restriction of the gift card on the product page.
                </p>
                <h1>Apple Gift Card Activation</h1>
                <p>1.On your device, open the App Store;</p>
                <p>
                  2.At the top of the screen, tap the sign-in button or your
                  photo;
                </p>
                <p>
                  3.Tap Redeem Gift Card or Code. If you don’t see Redeem Gift
                  Card or Code, sign in with your Apple ID;
                </p>
                <p>
                  4.Follow the instructions to enter the code and hit Redeem.
                </p>
              </div>
            </>
          )}
          {showAnswers === 3 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>Xbox Key Activation</h1>
                <p>
                  There are several ways to activate an Xbox exclusive key. It
                  can be done via the Microsoft redemption page, Xbox console,
                  Microsoft Store, or Xbox application on Windows. Some keys can
                  only be activated on the Xbox console.
                </p>
                <h1>How to redeem the key via the Microsoft page?</h1>
                <p>
                  1. check the region of the activation key bought, (if you're
                  not located in the appropriate region, please use a vpn. We
                  recommend{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={
                      "https://chrome.google.com/webstore/detail/urban-vpn-proxy/eppiocemhmnlbhjplcgkofciiegomcon"
                    }
                  >
                    Urban Vpn Proxy's chrome extension
                  </Link>
                  )
                </p>
                <Image
                  src={xboxAg1}
                  alt="xbox redeem gift card vpn"
                  style={{ width: "120%", height: "120%" }}
                />
                <p>
                  2.After you successfully logged in you will need to go to{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"https://redeem.microsoft.com"}
                  >
                    this redemption page
                  </Link>
                  .
                </p>
                <Image src={xboxAg2} alt="xbox redeem gift card" />
                <p>
                  3.Enter the 25-character code, select Next, and then follow
                  the prompts.
                </p>
                <p>
                  In case the Xbox key cannot be activated on the Microsoft
                  page, it needs to be redeemed on an Xbox console or Xbox
                  application on Windows.
                </p>
              </div>
            </>
          )}
          {showAnswers === 4 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>Battle.net Key Activation</h1>
                <p>
                  In order to activate a Blizzard game key, a Battle.net account
                  is needed (you can create one{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={
                      "https://account.battle.net/creation/flow/creation-full"
                    }
                  >
                    here
                  </Link>
                  ). After that, simply follow these steps:
                </p>
                <p>
                  1. Go to{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"https://www.blizzard.com"}
                  >
                    Blizzard
                  </Link>{" "}
                  and sign in to your account.
                </p>
                <p>
                  2. Click your email address from the upper right corner, and
                  select Account Settings.
                </p>
                <Image src={battlenetAg1} alt="battle.net redeem gift card" />
                <p>
                  3. On the Account settings page, on the menu on the left
                  select Account Overview.
                </p>
                <Image
                  src={battlenetAg2}
                  alt="battle.net redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
                <p>
                  4. Paste your game key in the designated area and click the
                  Redeem Code button.
                </p>
              </div>
            </>
          )}
          {showAnswers === 5 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>
                  PSN (Playstation Network) Key Activation
                </h1>
                <p>
                  You are able to redeem a PlayStation Network key either
                  through the website or through your console.
                </p>
                <h1>Website activation</h1>
                <p>
                  1. Sign in to your{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"https://store.playstation.com"}
                  >
                    PlayStation
                  </Link>{" "}
                  account. You can do so by clicking the Sign In button in the
                  upper-right corner.
                </p>
                <Image src={psnAg1} alt="playstation redeem gift card" />
                <p>
                  2. Click on the little happy face to open up a drop-down menu.
                </p>
                <Image
                  src={psnAg2}
                  alt="playsation redeem gift card"
                  // style={{ width: "120%", height: "120%" }}
                />
                <p>
                  3. In the drop-down menu you will see the Redeem Code section.
                </p>
                <Image
                  src={psnAg3}
                  alt="playsation redeem gift card"
                  // style={{ width: "120%", height: "120%" }}
                />
                <p>
                  4. After following all of the previous steps, you should be in
                  the key redemption screen where you can enter your key with
                  ease. Just make sure to double-check carefully if there aren't
                  any mistakes!
                </p>
                <Image
                  src={psnAg4}
                  alt="playsation redeem gift card"
                  // style={{ width: "120%", height: "120%" }}
                />
              </div>
            </>
          )}
          {showAnswers === 6 && (
            <>
              <div className="answers-container">
                <NavigationBar
                  setShowPage={setShowPage}
                  setShowAnswers={setShowAnswers}
                />
                <h1 style={{ fontSize: "3rem" }}>Epic Games Key Activation</h1>
                <h1>Activation through the website</h1>
                <p>
                  1. Visit{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"https://www.epicgames.com"}
                  >
                    epicgames.com
                  </Link>{" "}
                  and sign into your Epic Games account or create a new account
                  if this is the first game you activate on this platform.
                </p>
                <p>
                  2. Once you're logged in, use this{" "}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={"www.epicgames.com/store/redeem"}
                  >
                    link
                  </Link>{" "}
                  to activate your game.
                </p>
                <Image
                  src={epicAg1}
                  alt="epicgames redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
                <p>3. Enter your key and click Redeem.</p>
                <h1>Activation through the application</h1>
                <p>
                  You can also activate your key through the Epic games
                  application. This is how you do it:
                </p>
                <p>1. Launch your Epic Games application.</p>
                <p>
                  2. Click on your account in the top-right corner and then
                  click Redeem Code.
                </p>
                <Image
                  src={epicAg2}
                  alt="epicgames redeem gift card"
                  style={{ width: "120%", height: "120%" }}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
