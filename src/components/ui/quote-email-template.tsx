import React from "react";
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Section,
  Text,
  Preview,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type QuoteEmailTemplateProps = {
  email: string;
  message: string;
};

export default function QuoteEmailTemplate({
  email,

  message,
}: QuoteEmailTemplateProps) {
  return (
    <Html>
      <Head>
        <Preview>New Contact from {email}</Preview>
      </Head>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md border border-primaryy">
              <Heading className="leading-tight">
                Portfolio Contact Request
              </Heading>
              <Hr />

              <Text>
                <strong>Email:</strong> {email}
              </Text>

              <Text>
                <strong>Message:</strong> {message}
              </Text>
              <Hr />
              <Text>
                This email was sent from the contact form on your portfolio.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
