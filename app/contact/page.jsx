"use client";

import React, { useState } from "react";

import { render } from "@react-email/render";
import ContactmeMessage from "../../emails/ContactmeMessage";
import Link from "next/link";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailRes, setEmailRes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setEmailRes("sending");

      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          subject,
          fromEmail: email,
          toEmail: "digitalcitymaroc@hotmail.com",
          text: email + ": " + message,
          html: render(
            <ContactmeMessage
              email={email}
              subject={subject}
              message={message}
            />
          ),
        }),
      });
      setEmail("");
      setSubject("");
      setMessage("");
      if (res.status === 200) {
        setEmailRes("email succesfully sent");
      }
    } catch (error) {
      setEmailRes("there was an error somewhere");
      console.log(error);
    }
  };

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <div className="contactus-header">
        <h2 style={{ padding: "20px", fontSize: "2rem" }}>Service Client</h2>
        <h4 style={{ color: "grey", fontSize: "1.5rem" }}>
          How can we help you?
        </h4>
      </div>
      <div className="inputs-container">
        <input
          className="contact-input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />

        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="subject"
          className="contact-input"
        />

        <textarea
          className="contact-input"
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
        ></textarea>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <button type="submit" className="contact-btn">
            send
          </button>
          <p style={{ position: "absolute", right: "0px" }}>{emailRes}</p>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        or you can see our faq{" "}
        <Link href={"/faq"} style={{ color: "blueviolet" }}>
          here
        </Link>
      </div>
    </form>
  );
};

export default Contact;
