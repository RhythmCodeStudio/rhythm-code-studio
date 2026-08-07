"use client";

// import from react
import React, { useState } from "react";
//import components
import FormCheckbox from "@/components/form-checkbox";
import FormInput from "@/components/form-input";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "@/utils/utils";

export default function MusicianSurveyForm() {
  const [checked, setChecked] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    setState(e.target.value);

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

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonSubmitted(true);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className=" px-12 py-4 sm:py-8 w-full mx-auto relative">
      <FormInput
        idPrefix="contact-form"
        inputType="input"
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        handleChange={handleChange}
        placeholder="First Name"
        required={false}
        autoComplete="given-name"
        errorMessage={firstNameErrorMessage}
        setStateVariable={setFirstName}
      />
      <FormInput
        idPrefix="contact-form"
        inputType="input"
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        handleChange={handleChange}
        placeholder="Last Name"
        required={false}
        autoComplete="family-name"
        errorMessage={lastNameErrorMessage}
        setStateVariable={setLastName}
      />
      <FormInput
        idPrefix="contact-form"
        inputType="input"
        label="Email"
        type="email"
        name="email"
        value={email}
        handleChange={handleChange}
        placeholder="Email"
        required={true}
        autoComplete="email"
        errorMessage={emailErrorMessage}
        setStateVariable={setEmail}
      />
    </form>
  );
}
