// "use client";
// // import from react
// import { useState } from "react";
// import components
import ContactFormContainer from "../../components/contact-form-container";
// // import copy
// import { contactPageCopy } from "../lib/copy/contact-page-copy";

export const metadata = {
  title: "Sync Up | Rhythm Code Studio",
  description:
    "Sync up with Rhythm Code Studio. Custom web solutions to match your beat. Contact Rhythm Code Studio to get started on your custom web project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <ContactFormContainer />
  )
}