"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import components
import ContactFormInput from "./contact-form-input";
// import from utils
import {
  validateEmail,
  validateName,
  // validatePhone,
  validateMessage,
} from "../app/lib/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm({ setFormSubmitted }: { setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setState(e.target.value);
    // Check if the email is being updated and is valid
    if (e.target.name === "email" && validateEmail(e.target.value)) {
      setEmailErrorMessage("");
    }
    if (e.target.name === "first_name" && validateName(e.target.value)) {
      setFirstNameErrorMessage("");
    }
    if (e.target.name === "last_name" && validateName(e.target.value)) {
      setLastNameErrorMessage("");
    }
    // if (e.target.name === "phone" && validatePhone(e.target.value)) {
    //   setPhoneErrorMessage("");
    // }
    if (e.target.name === "message" && validateMessage(e.target.value)) {
      setMessageErrorMessage("");
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // trim form data
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    // const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
    const isEmailValid = validateEmail(trimmedEmail);
    // const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);
    if (!isFirstNameValid) {
      setFirstNameErrorMessage("Please enter a valid first name.");
      return;
    }
    if (!isLastNameValid) {
      setLastNameErrorMessage("Please enter a valid last name.");
      return;
    }
    // if (!isPhoneValid) {
    //   setPhoneErrorMessage("Please enter a valid phone number.");
    //   return;
    // }
    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isMessageValid) {
      setMessageErrorMessage("Please enter a message.");
      return;
    }
    if (
      isEmailValid &&
      // isPhoneValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isMessageValid
    ) {
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        // phone_number: trimmedPhone,
        message: message,
      };

      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            emailTemplateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then((result) => {
            track("Contact form submission");
            setButtonSubmitted(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            // setPhone("");
            setMessage("");
            setFormSubmitted(true);
            // Reset the button's submitted state after 5 seconds
            setTimeout(() => {
              setButtonSubmitted(false);
            }, 5000);
          });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please click to email us at kevin@rhythmcodestudio.tech. We apologize for the inconvenience."
        );
      }
    }
  };

  return (
    <div className="p-8 m-4 w-full">
      <form onSubmit={handleFormSubmit} className="">
        <ContactFormInput
          label="First Name"
          name="first_name"
          type="text"
          placeholder=""
          value={firstName}
          required={true}
          errorMessage={firstNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setFirstName}
        />
        <ContactFormInput
          label="last name"
          name="last_name"
          type="text"
          placeholder=""
          value={lastName}
          required={true}
          errorMessage={lastNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setLastName}
        />
        <ContactFormInput
          label="Email"
          name="email"
          type="text"
          placeholder=""
          value={email}
          required={true}
          errorMessage={emailErrorMessage}
          handleChange={handleChange}
          setStateVariable={setEmail}
        />

        <div className="flex flex-col py-2">
          <label htmlFor="message" className="px-4 font-bold">
            {`Brief Project Description*`.toUpperCase()}
            <span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1500}
            placeholder=""
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required={true}
            name="message"
            id="message"
            className="resize-none h-36 rounded-2xl px-4 opacity-75"
          />
          <p className="">{messageErrorMessage}</p>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-2 text-white rounded-2xl px-4 py-1 mt-4 hover:text-black hover:bg-white"
            onClick={handleFormSubmit}
            // isSubmitted={buttonSubmitted}
          >
            {buttonSubmitted ? "Message Sent!" : "SYNC UP TODAY"}
          </button>
        </div>
      </form>
    </div>
  );
}
