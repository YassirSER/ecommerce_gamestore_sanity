import React from "react";

import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

const PaymentNotification = ({ order }) => {
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
            your new order{" "}
            <span style={{ fontWeight: "800" }}>{order.orderId}</span> has just
            been registered for a total of {order.price} MAD. Your products
            activation key will be sent to you shortly in a 24h delay.
          </Text>
        </Section>
        <Section>
          <Text>
            {" "}
            If there is any question you may like to ask, please contact us at{" "}
            <span>digitalcitymaroc@hotmail.com</span>. Thank you for your
            purchase !
          </Text>
        </Section>
      </Container>
    </Html>
  );
};

export default PaymentNotification;
