import React from "react";

import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

import Visamastercard from "../public/paymentbanner.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <h1>DIGITALCITY.MA</h1>
          <p style={{ color: "54595F" }}>
            <TbTruckDelivery /> Digital & Instant Delivery !
          </p>
          <p>
            <span style={{ color: "54595F" }}>
              <AiOutlineWhatsApp /> Whatsapp:
            </span>{" "}
            06 60 68 48 07
          </p>
          <p>
            <span style={{ color: "54595F" }}>
              <AiOutlineMail /> Email:
            </span>{" "}
            gamestoremaroc@hotmail.com
          </p>
        </div>
        <div className="footer-payment-container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800" }}>
            SAFE PAYMENTS
          </h2>
          <p>Moroccan and international cards are accepted</p>
          <Image
            src={Visamastercard}
            width={300}
            height={100}
            alt="payment methods visa/mastercard/paypal"
          />
        </div>
      </div>

      <div className="bottom-footer">
        <div className="copyright">
          <p style={{ paddingLeft: "10px" }}>
            2023 Digitalcity All Rights Reserved
          </p>
          <p className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </p>
        </div>
        <div className="footer-links">
          <Link href={"/contact"}>CONTACT US</Link>
          <Link href={"/faq"}>FAQ</Link>
          <Link href={"/"}>OTHER</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
