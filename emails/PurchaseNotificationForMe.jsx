import React from "react";

import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

const PurchaseNotificationForMe = ({ order, names }) => {
  return (
    <Html>
      <Container
        style={{
          // display: "flex",
          width: "90%",
          height: "fit-content",
          // alignItems: "center",
        }}
      >
        <Section>
          {/* <h1> */}
          <Section style={{ fontSize: "2rem" }}>
            Order <span style={{ fontWeight: "800" }}>{order.orderId}</span>{" "}
            received
          </Section>
          {/* </h1> */}
          <Text>
            new order from {order.name} for
            <span style={{ fontWeight: "800" }}>{names}</span> for a total of{" "}
            <span style={{ fontWeight: "800" }}>{order.price}</span>
          </Text>
        </Section>
        <Section>
          <Text>
            Info about the customer
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <span style={{ fontWeight: "800" }}>name</span>: {order.name}
              <span style={{ fontWeight: "800" }}>email</span>: {order.email}
              <span style={{ fontWeight: "800" }}>phone number</span>:{" "}
              {order.phoneNumber}
              <span style={{ fontWeight: "800" }}>city</span>: {order.city}
              <span style={{ fontWeight: "800" }}>orderId</span>:{" "}
              {order.orderId}
            </div>
          </Text>
        </Section>
      </Container>
    </Html>
  );
};

export default PurchaseNotificationForMe;
