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
  const [phone, setPhone] = useState("");
  const [bandOrArtistName, setBandOrArtistName] = useState("");
  const [musicIs, setMusicIs] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [bandOrArtistNameErrorMessage, setBandOrArtistNameErrorMessage] =
    useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [musicIsErrorMessage, setMusicIsErrorMessage] = useState("");
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
    if (e.target.name === "bandOrArtistName" && e.target.value.trim() !== "") {
      setBandOrArtistNameErrorMessage("");
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
        idPrefix="stl-musician-survey"
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
        idPrefix="stl-musician-survey"
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
        idPrefix="stl-musician-survey"
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
      <FormInput
        idPrefix="stl-musician-survey"
        inputType="input"
        label="Phone"
        type="tel"
        name="phone"
        value={phone}
        handleChange={handleChange}
        placeholder="Phone"
        required={false}
        autoComplete="tel"
        errorMessage={phoneErrorMessage}
        setStateVariable={setPhone}
      />
      <FormInput
        idPrefix="stl-musician-survey"
        inputType="input"
        label="Band or Artist Name"
        type="text"
        name="bandOrArtistName"
        value={bandOrArtistName}
        handleChange={handleChange}
        placeholder="Band or Artist Name"
        required={true}
        autoComplete="off"
        errorMessage={bandOrArtistNameErrorMessage}
        setStateVariable={setBandOrArtistName}
      />
      <p>For you music is...</p>
      <FormCheckbox
        idPrefix="stl-musician-survey"
        label="My job"
        name="musicIs"
        onChange={handleCheckboxChange}
        checked={musicIs.includes("My job")}
        errorMessage={musicIsErrorMessage}
      />
      <FormCheckbox
        idPrefix="stl-musician-survey"
        label="My passion"
        name="musicIs"
        onChange={handleCheckboxChange}
        checked={musicIs.includes("My passion")}
        errorMessage={musicIsErrorMessage}
      />
      <FormCheckbox
        idPrefix="stl-musician-survey"
        label="My hobby"
        name="musicIs"
        onChange={handleCheckboxChange}
        checked={musicIs.includes("My hobby")}
        errorMessage={musicIsErrorMessage}
      />
      <FormCheckbox
        idPrefix="stl-musician-survey"
         label="Something else"
        name="musicIs"
        onChange={handleCheckboxChange}
        checked={musicIs.includes("Something else")}
        errorMessage={musicIsErrorMessage}
      />
      
    </form>
  );
}
