"use client";

// import from react
import { useState } from "react";
// import components
import ContactForm from "../../components/contact-form";
// import copy
import { contactPageCopy } from "../lib/copy/contact-page-copy";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="flex flex-col items-center sm:text-lg xl:text-xl 2xl:text-2xl">
      {formSubmitted ? (
        <div className="items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl 2xl:text-10xl font-blenny text-center">Rock On!</h1>
          <p className="m-8 max-w-128">
            Thanks for your inquiry. Your request to sync up was received. Rhythm Code Studio will reach out to you shortly.
          </p>
        </div>
      ) : (
        <>
      <div className=" items-center justify-center max-w-200">
        <p className="px-8 py-4">
          {contactPageCopy.text_block_one}
        </p>
        <p className=" px-8 p-4">
          {contactPageCopy.text_block_two}
        </p>
      </div>
      <ContactForm setFormSubmitted={setFormSubmitted} />
      </>
      )}
    </div>
  );
}
