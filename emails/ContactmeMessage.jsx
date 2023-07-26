import React from "react";

import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

const ContactmeMessage = ({ subject, message, email }) => {
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
          <h1>message from {email}</h1>
          <h4>Subject: {subject}</h4>
        </Section>
        <Section>
          <Text>{message}</Text>
        </Section>
      </Container>
    </Html>
  );
};

export default ContactmeMessage;
