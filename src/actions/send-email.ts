"use server";

import React from "react";
import { Resend } from "resend";
import QuoteEmailTemplate from "@/components/ui/quote-email-template";

const resend = new Resend(process.env.PUBLIC_NEXT_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // Extract form data
  //   const name = formData.get("name");
  const email = formData.get("email");
  //   const address = formData.get("address");
  //   const phone = formData.get("phone");
  //   const source = formData.get("source");
  //   const services = formData.get("services");
  const message = formData.get("message");

  // Basic validation

  try {
    // Set loading state to true
    // const loading = true;

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "ayushkazishrestha@gmail.com",
      subject: "New Portfolio Contact ",
      replyTo: email as string,
      react: React.createElement(QuoteEmailTemplate, {
        email: email as string,

        message: message as string,
      }),
    });

    // Return success message after email is sent
    return { status: "success", message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error message in case of failure
    return { status: "error", message: "Failed to send email." };
  } finally {
    // Set loading state to false after operation is complete
    // const loading = false;
  }
};
