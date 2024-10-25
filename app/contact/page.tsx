"use client";
// import from react
import { useState } from "react";
// import components
import ContactForm from "../../components/contact-form";
// import copy
import { contactPageCopy } from "../lib/copy/contact-page-copy";

// export const metadata = {
//   title: "Sync Up | Rhythm Code Studio",
//   description:
//     "Sync up with Rhythm Code Studio. Custom web solutions to match your beat. Contact Rhythm Code Studio to get started on your custom web project.",
//   alternates: {
//     canonical: "/contact",
//   },
// };

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="flex flex-col items-center sm:text-lg xl:text-xl 2xl:text-2xl">
      {formSubmitted ? (
        <div className="items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl 2xl:text-10xl font-blenny text-center">
            Rock On!
          </h1>
          <p className="m-8 max-w-128">
            Thanks for your inquiry. Your request to sync up was received.
            Rhythm Code Studio will reach out to you shortly.
          </p>
        </div>
      ) : (
        <>
        <h1 className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-blenny pb-2">
          Sync Up
        </h1>
          <div className=" items-center justify-center max-w-200">
            <p className="px-8 py-4">{contactPageCopy.text_block_one}</p>
            <p className=" px-8 p-4">{contactPageCopy.text_block_two}</p>
          </div>
          <ContactForm setFormSubmitted={setFormSubmitted} />
        </>
      )}
    </div>
  );
}
