"use client";
// import from react
import { useState } from "react";
// import themes
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import components
import Heading from "./heading";
import ContactForm from "../components/contact-form";
import ContactIconLinks from "./contact-icon-links";
// import copy
import { contactPageCopy } from "@/lib/copy/contact-page-copy";

export default function ContactFormContainer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const theme = useTheme();
  const themeObj = themes[theme.theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;

  return (
    <div className={`flex flex-col items-center `}>
      {formSubmitted ? (
        <div className={`items-center justify-center text-${color} ${textShadow}`}>
          <h1 className="text-6xl font-blenny text-center">
            Rock On!
          </h1>
          <p className="m-6 max-w-128 px-6">
            Thank you for your inquiry. Your request to sync up has been received.
            Rhythm Code Studio will reach out to you shortly.
          </p>
          <div className="flex justify-center m-6">
            <ContactIconLinks
              orientation="horizontal"
              include={["GitHub", "LinkedIn", "Email", "Phone"]}
              size={24}
            />
          </div>
        </div>
      ) : (
        <>
          {/* <h1 className="text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-blenny pb-2">
            Contact
          </h1> */}
          <Heading
            headingLevel={1}
            text="Contact"
            className="text-center text-4xl md:text-5xl lg:text-6xl font-blenny"
          />
          <div className={`text-${color} ${textShadow} items-center justify-center max-w-3xl md:text-lg py-2`}>
            <p className="px-12 py-2">{contactPageCopy.text_block_one}</p>
            <p className=" px-12 py-2">{contactPageCopy.text_block_two}</p>
          </div>
          <ContactForm setFormSubmitted={setFormSubmitted} />
        </>
      )}
    </div>
  );
}
