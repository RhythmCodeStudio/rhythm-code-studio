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
  validatePhone,
  validateMessage,
} from "../app/lib/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
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
    if (e.target.name === "firstName" && validateName(e.target.value)) {
      setFirstNameErrorMessage("");
    }
    if (e.target.name === "lastName" && validateName(e.target.value)) {
      setLastNameErrorMessage("");
    }
    if (e.target.name === "phone" && validatePhone(e.target.value)) {
      setPhoneErrorMessage("");
    }
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
    const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);
    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isFirstNameValid) {
      setFirstNameErrorMessage("Please enter a valid first name.");
      return;
    }
    if (!isLastNameValid) {
      setLastNameErrorMessage("Please enter a valid last name.");
      return;
    }
    if (!isPhoneValid) {
      setPhoneErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (!isMessageValid) {
      setMessageErrorMessage("Please enter a message.");
      return;
    }
    if (
      isEmailValid &&
      isPhoneValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isMessageValid
    ) {
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
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
            setPhone("");
            setMessage("");
            // Reset the button's submitted state after 5 seconds
            setTimeout(() => {
              setButtonSubmitted(false);
            }, 5000);
          });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please click to email us at mmmcontact@mikemartinmedia.com. We apologize for the inconvenience."
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
          placeholder="First Name"
          value={firstName}
          errorMessage={firstNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setFirstName}
        />
        <ContactFormInput
          label="Last Name"
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={lastName}
          errorMessage={lastNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setLastName}
        />
        <ContactFormInput
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          errorMessage={emailErrorMessage}
          handleChange={handleChange}
          setStateVariable={setEmail}
        />
        {/* <div className="flex flex-col py-2">
          <label htmlFor="first_name" className="px-4">First Name</label>
          <input
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => handleChange(e, setFirstName)}
            required
            className="rounded-xl px-4 opacity-80"
            placeholder="First Name"
          />
          <p className="text-red-500">{firstNameErrorMessage}</p>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="first_name" className="px-4">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => handleChange(e, setLastName)}
            required
            className="rounded-xl px-4 opacity-80"
            placeholder="First Name"
          />
          <p className="text-red-500">{lastNameErrorMessage}</p>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="email" className="px-4">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            required
            className="rounded-xl px-4 opacity-80"
            placeholder="Email"
          />
          <p className="text-red-500">{emailErrorMessage}</p>
        </div> */}

        <div className="flex flex-col py-2">
          <label htmlFor="email" className="px-4">
            Brief Project Description*
            <span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1000}
            placeholder="Please briefly describe your project."
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required
            name="message"
            id="message"
            className="resize-none h-32 rounded-2xl px-4 opacity-75"
          />
          <p className="text-red-500">{messageErrorMessage}</p>
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
