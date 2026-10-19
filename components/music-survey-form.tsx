"use client";

// import from react
import React, { useState } from "react";
//import components
import FormCheckbox from "@/components/form-checkbox";
import FormInput from "@/components/form-input";
import FormRadioGroup from "@/components/form-radio-group";
import FormCheckboxGroup from "@/components/form-checkbox-group";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "@/utils/utils";

export default function MusicianSurveyForm() {
  const [responseType, setResponseType] = useState("musician");
  const [checked, setChecked] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bandOrArtistName, setBandOrArtistName] = useState("");
  const [musicIs, setMusicIs] = useState("");
  const [incomeFromMusic, setIncomeFromMusic] = useState("");
  const [earnMoreFromMusic, setEarnMoreFromMusic] = useState("");
  const [socialMediaYouUse, setSocialMediaYouUse] = useState<string[]>([]);
  const [otherSocialMediaPlatforms, setOtherSocialMediaPlatforms] =
    useState("");
  const [howDoYouUseSocialMedia, setHowDoYouUseSocialMedia] = useState("");
  const [likeAboutSocialMedia, setLikeAboutSocialMedia] = useState("");
  const [likeAboutSocialMediaErrorMessage, setLikeAboutSocialMediaErrorMessage] = useState("");
  const [hateAboutSocialMedia, setHateAboutSocialMedia] = useState("");
  const [hateAboutSocialMediaErrorMessage, setHateAboutSocialMediaErrorMessage] = useState("");
  const [streamingPlatformsUsed, setStreamingPlatformsUsed] = useState<string[]>([]);
  const [streamingPlatformsUsedErrorMessage, setStreamingPlatformsUsedErrorMessage] = useState("");
  const [otherStreamingPlatforms, setOtherStreamingPlatforms] = useState("");
  const [otherStreamingPlatformsErrorMessage, setOtherStreamingPlatformsErrorMessage] = useState("");
  const [likeAboutStreamingPlatforms, setLikeAboutStreamingPlatforms] = useState("");
  const [likeAboutStreamingPlatformsErrorMessage, setLikeAboutStreamingPlatformsErrorMessage] = useState("");
  const [hateAboutStreamingPlatforms, setHateAboutStreamingPlatforms] = useState("");
  const [hateAboutStreamingPlatformsErrorMessage, setHateAboutStreamingPlatformsErrorMessage] = useState("");
  const [makeInternetBetter, setMakeInternetBetter] = useState("");
  const [makeInternetBetterErrorMessage, setMakeInternetBetterErrorMessage] = useState("");
  const [isInterestedInLocalPlatform, setIsInterestedInLocalPlatform] = useState("");
  const [isInterestedInLocalPlatformErrorMessage, setIsInterestedInLocalPlatformErrorMessage] = useState("");
  const [wantFromLocalPlatform, setWantFromLocalPlatform] = useState("");
  const [wantFromLocalPlatformErrorMessage, setWantFromLocalPlatformErrorMessage] = useState("");
  const [isWillingToProvidePerks, setIsWillingToProvidePerks] = useState("");
  const [isWillingToProvidePerksErrorMessage, setIsWillingToProvidePerksErrorMessage] = useState("");
  const [perksToOffer, setPerksToOffer] = useState("");
  const [perksToOfferErrorMessage, setPerksToOfferErrorMessage] = useState("");
  const [makeLocalSceneBetter, setMakeLocalSceneBetter] = useState("");
  const [makeLocalSceneBetterErrorMessage, setMakeLocalSceneBetterErrorMessage] = useState("");
  const [hasWebsite, setHasWebsite] = useState("");
  const [hasWebsiteErrorMessage, setHasWebsiteErrorMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [websiteErrorMessage, setWebsiteErrorMessage] = useState("");
  const [isInterestedInWebsiteUpgrade, setIsInterestedInWebsiteUpgrade] = useState("");
  const [isInterestedInWebsiteUpgradeErrorMessage, setIsInterestedInWebsiteUpgradeErrorMessage] = useState("");
  const [isInterestedInNewWebsite, setIsInterestedInNewWebsite] = useState("");
  const [isInterestedInNewWebsiteErrorMessage, setIsInterestedInNewWebsiteErrorMessage] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [additionalCommentsErrorMessage, setAdditionalCommentsErrorMessage] = useState("");


  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [bandOrArtistNameErrorMessage, setBandOrArtistNameErrorMessage] =
    useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [musicIsErrorMessage, setMusicIsErrorMessage] = useState("");
  const [
    otherSocialMediaPlatformsErrorMessage,
    setOtherSocialMediaPlatformsErrorMessage,
  ] = useState("");
  const [
    howDoYouUseSocialMediaErrorMessage,
    setHowDoYouUseSocialMediaErrorMessage,
  ] = useState("");

  const isMusicianResponse = responseType === "musician";
  const isFanResponse = responseType === "fan";
  // const isVenueResponse = responseType === "venue";
  // const isSoundPersonResponse = responseType === "sound_person";

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleSocialMediaChange = (value: string) => {
    setSocialMediaYouUse((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
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
      className="px-12 py-4 sm:py-8 w-full mx-auto relative">
      <FormRadioGroup
        legend="Select the option that best describes you."
        name="responseType"
        value={responseType}
        onChange={setResponseType}
        options={[
          { value: "musician", label: "Musician" },
          { value: "fan", label: "Fan" },
        ]}
        className="px-2"
      />

      {/* <p className="text-xs -mt-2 mb-4">
        If more than one category applies you can submit multiple surveys for
        each category.
      </p> */}
      <FormInput
        idPrefix="stl-music-survey"
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
        idPrefix="stl-music-survey"
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
        idPrefix="stl-music-survey"
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
        idPrefix="stl-music-survey"
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
      {isMusicianResponse && (
        <>
          <FormInput
            idPrefix="stl-music-survey"
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

          <FormRadioGroup
            legend="For you, music is..."
            name="musicIs"
            value={musicIs}
            onChange={setMusicIs}
            options={[
              { value: "job", label: "Your profession" },
              { value: "hobby", label: "A fun hobby" },
              { value: "artistic-expression", label: "Artistic expression" },
            ]}
            className="px-2"
          />
          <FormRadioGroup
            legend="How much of your income comes from music?"
            name="incomeFromMusic"
            value={incomeFromMusic}
            onChange={setIncomeFromMusic}
            options={[
              { value: "primary", label: "Primary income source" },
              { value: "secondary", label: "A significant portion" },
              { value: "none", label: "Little to no income" },
            ]}
            className="px-2"
          />
          <FormRadioGroup
            legend="Would you like to earn more from your music?"
            name="earnMoreFromMusic"
            value={earnMoreFromMusic}
            onChange={setEarnMoreFromMusic}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            className="px-2"
          />

          <p></p>
          <FormCheckboxGroup
            legend="Which Social Media platforms do you use to promote your music? Check all that apply."
            name="socialMediaPlatforms"
            selectedValues={socialMediaYouUse}
            onChange={handleSocialMediaChange}
            options={[
              { value: "facebook", label: "Facebook" },
              { value: "instagram", label: "Instagram" },
              { value: "twitter", label: "Twitter" },
              { value: "tiktok", label: "TikTok" },
              { value: "youtube", label: "YouTube" },
              { value: "other", label: "Other" },
            ]}
            className="px-2"
            orientation="horizontal"
          />
          {socialMediaYouUse.includes("other") && (
            <>
              <p>
                Please enter other social media platforms you use. Separate them
                with commas.
              </p>
              <FormInput
                inputType="input"
                label="Other Social Media Platforms"
                type="text"
                name="otherSocialMediaPlatforms"
                value={otherSocialMediaPlatforms}
                handleChange={handleChange}
                placeholder="Other Social Media Platform"
                required={false}
                autoComplete="off"
                errorMessage={otherSocialMediaPlatformsErrorMessage}
                setStateVariable={setOtherSocialMediaPlatforms}
              />
            </>
          )}
          <FormInput
            inputType="textarea"
            label="How do you use social media to promote your music?"
            type="text"
            name="howDoYouUseSocialMedia"
            value={howDoYouUseSocialMedia}
            handleChange={handleChange}
            placeholder="Describe how you use social media"
            required={false}
            autoComplete="off"
            errorMessage={howDoYouUseSocialMediaErrorMessage}
            setStateVariable={setHowDoYouUseSocialMedia}
          />
          
        </>
      )}
    </form>
  );
}
