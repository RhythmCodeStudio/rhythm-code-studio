// "use client";
// // import from vercel
// import { track } from "@vercel/analytics";
// // import from react
// import { useState } from "react";
// // import components
// import ContactFormInput from "./contact-form-input";
// // import from utils
// import {
//   validateEmail,
//   validateName,
//   // validatePhone,
//   validateMessage,
// } from "../utils/utils";
// // import from emailjs
// import emailjs from "@emailjs/browser";

// export default function ContactForm({ setFormSubmitted }: { setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>> }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   // const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   // const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
//   const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
//   const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
//   const [messageErrorMessage, setMessageErrorMessage] = useState("");
//   const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
//   const [buttonSubmitted, setButtonSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     setState: React.Dispatch<React.SetStateAction<any>>
//   ) => {
//     setState(e.target.value);
//     // Check if the email is being updated and is valid
//     if (e.target.name === "email" && validateEmail(e.target.value)) {
//       setEmailErrorMessage("");
//     }
//     if (e.target.name === "first_name" && validateName(e.target.value)) {
//       setFirstNameErrorMessage("");
//     }
//     if (e.target.name === "last_name" && validateName(e.target.value)) {
//       setLastNameErrorMessage("");
//     }
//     // if (e.target.name === "phone" && validatePhone(e.target.value)) {
//     //   setPhoneErrorMessage("");
//     // }
//     if (e.target.name === "message" && validateMessage(e.target.value)) {
//       setMessageErrorMessage("");
//     }
//   };

//   const handleFormSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     // trim form data
//     const trimmedFirstName = firstName.trim();
//     const trimmedLastName = lastName.trim();
//     const trimmedEmail = email.trim();
//     // const trimmedPhone = phone.trim();
//     // validation  for inputs, handle errors accordingly
//     const isEmailValid = validateEmail(trimmedEmail);
//     // const isPhoneValid = validatePhone(trimmedPhone);
//     const isFirstNameValid = validateName(trimmedFirstName);
//     const isLastNameValid = validateName(trimmedLastName);
//     const isMessageValid = validateMessage(message);
//     if (!isFirstNameValid) {
//       setFirstNameErrorMessage("Please enter a valid first name.");
//       return;
//     }
//     if (!isLastNameValid) {
//       setLastNameErrorMessage("Please enter a valid last name.");
//       return;
//     }
//     // if (!isPhoneValid) {
//     //   setPhoneErrorMessage("Please enter a valid phone number.");
//     //   return;
//     // }
//     if (!isEmailValid) {
//       setEmailErrorMessage("Please enter a valid email address.");
//       return;
//     }
//     if (!isMessageValid) {
//       setMessageErrorMessage("Please enter a message.");
//       return;
//     }
//     if (
//       isEmailValid &&
//       // isPhoneValid &&
//       isFirstNameValid &&
//       isLastNameValid &&
//       isMessageValid
//     ) {
//       const emailTemplateParams = {
//         first_name: trimmedFirstName,
//         last_name: trimmedLastName,
//         email: trimmedEmail,
//         // phone_number: trimmedPhone,
//         message: message,
//       };

//       try {
//         emailjs
//           .send(
//             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//             process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//             emailTemplateParams,
//             process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//           )
//           .then((result) => {
//             track("Contact form submission");
//             setButtonSubmitted(true);
//             setFirstName("");
//             setLastName("");
//             setEmail("");
//             // setPhone("");
//             setMessage("");
//             setFormSubmitted(true);
//             // Reset the button's submitted state after 5 seconds
//             setTimeout(() => {
//               setButtonSubmitted(false);
//             }, 5000);
//           });
//       } catch (error) {
//         setDeliveryErrorMessage(
//           "There was an error delivering your message. Please click to email us at kevin@rhythmcodestudio.tech. We apologize for the inconvenience."
//         );
//       }
//     }
//   };

//   return (
//     <div className="expand-on-load p-8 m-4 w-full">
//       <form onSubmit={handleFormSubmit} className="">
//         <ContactFormInput
//           label="First Name"
//           name="first_name"
//           type="text"
//           placeholder=""
//           value={firstName}
//           required={true}
//           errorMessage={firstNameErrorMessage}
//           handleChange={handleChange}
//           setStateVariable={setFirstName}
//         />
//         <ContactFormInput
//           label="last name"
//           name="last_name"
//           type="text"
//           placeholder=""
//           value={lastName}
//           required={true}
//           errorMessage={lastNameErrorMessage}
//           handleChange={handleChange}
//           setStateVariable={setLastName}
//         />
//         <ContactFormInput
//           label="Email"
//           name="email"
//           type="text"
//           placeholder=""
//           value={email}
//           required={true}
//           errorMessage={emailErrorMessage}
//           handleChange={handleChange}
//           setStateVariable={setEmail}
//         />

//         <div className="flex flex-col py-2">
//           <label htmlFor="message" className="px-4 font-bold">
//             {`Brief Project Description*`.toUpperCase()}
//             <span className="text-xs"> (required)</span>
//           </label>
//           <textarea
//             autoComplete="off"
//             maxLength={1500}
//             placeholder=""
//             onChange={(e) => handleChange(e, setMessage)}
//             value={message}
//             required={true}
//             name="message"
//             id="message"
//             className="resize-none h-36 rounded-3xl px-4 opacity-75"
//           />
//           <p className="">{messageErrorMessage}</p>
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="tracking-wider border border-2 text-white rounded-full px-4 py-1 mt-4 hover:text-black hover:bg-white"
//             onClick={handleFormSubmit}
//             // isSubmitted={buttonSubmitted}
//           >
//             {buttonSubmitted ? "Message Sent!" : "SUBMIT"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from clsx
import { clsx } from "clsx";
// import from toastify
import { ToastContainer, Zoom, toast } from "react-toastify";
// import components
import ContactFormInput from "./contact-form-input";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../utils/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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

  const isFormValid =
    validateName(firstName.trim()) &&
    validateName(lastName.trim()) &&
    validateEmail(email.trim()) &&
    validatePhone(phone.trim()) &&
    validateMessage(message);

  const showErrorToast = (msg: string) => {
    toast.error(msg, {
      transition: Zoom,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      className: "border-2 border-neutral-400 text-white",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = e.target;
    setState(value);
    // Validate and set error messages
    if (name === "email") {
      setEmailErrorMessage(
        value && !validateEmail(value)
          ? "Please enter a valid email address."
          : ""
      );
    }
    if (name === "first_name") {
      setFirstNameErrorMessage(
        value && !validateName(value)
          ? "Name can only contain letters and spaces."
          : ""
      );
    }
    if (name === "last_name") {
      setLastNameErrorMessage(
        value && !validateName(value)
          ? "Name can only contain letters and spaces."
          : ""
      );
    }
    if (name === "phone") {
      setPhoneErrorMessage(
        value && !validatePhone(value)
          ? "Please enter a valid phone number."
          : ""
      );
    }
    if (name === "message") {
      setMessageErrorMessage(
        value && !validateMessage(value) ? "Please enter a valid message." : ""
      );
    }
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
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

    const errors = [];
    if (!isEmailValid) errors.push("email");
    if (!isFirstNameValid) errors.push("first_name");
    if (!isLastNameValid) errors.push("last_name");
    if (!isPhoneValid) errors.push("phone");
    if (!isMessageValid) errors.push("message");

    if (errors.length === 0) {
      // All valid
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
        message: message,
      };

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          emailTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        // .then((result) => {
        track("Contact form submission");
        setButtonSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFormSubmitted(true);
        // Reset the button's submitted state after 5 seconds
        setTimeout(() => {
          setButtonSubmitted(false);
        }, 5000);
        // });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email me at kevinlong.dev@gmail.com. My apologies for the inconvenience."
        );
        toast.error(
          <div className="p-2">
            <p>
              There was an error delivering your message. Please send me an
              email.
            </p>
            <a
              href="mailto:kevinlong.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500 hover:text-blue-700">
              kevinlong.dev@gmail.com
            </a>
          </div>,
          {
            transition: Zoom,
            position: "top-center",
            closeOnClick: true,
            pauseOnHover: true,
            className: "border-2 border-neutral-400 text-white",
          }
        );
      }
    } else if (errors.length === 1) {
      // One field is invalid
      if (errors[0] === "email")
        showErrorToast("Please enter a valid email address.");
      if (errors[0] === "name") showErrorToast("Please enter a name.");
      if (errors[0] === "phone")
        showErrorToast("Please enter a valid phone number.");
      if (errors[0] === "message") showErrorToast("Please enter a message.");
    } else {
      // Multiple fields invalid
      toast.error("Please fill in all required fields.", {
        transition: Zoom,
        position: "top-center",
        closeOnClick: true,
        pauseOnHover: true,
        className: "border-2 border-neutral-400 text-white",
      });
    }
  };

  return (
    <div className="w-full text-base">
      <form
        onSubmit={handleFormSubmit}
        className="px-12 py-6 max-w-200 mx-auto relative ">
        <ContactFormInput
          inputType="input"
          label="First Name"
          name="first_name"
          type="text"
          placeholder=""
          value={firstName}
          required={true}
          autoComplete="given-name"
          errorMessage={firstNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setFirstName}
        />
        <ContactFormInput
          inputType="input"
          label="Last Name"
          name="last_name"
          type="text"
          placeholder=""
          value={lastName}
          required={true}
          autoComplete="family-name"
          errorMessage={lastNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setLastName}
        />
        <ContactFormInput
          inputType="input"
          label="Phone"
          name="phone"
          type="tel"
          placeholder=""
          value={phone}
          required={true}
          autoComplete="tel"
          errorMessage={phoneErrorMessage}
          handleChange={handleChange}
          setStateVariable={setPhone}
        />
        <ContactFormInput
          inputType="input"
          label="Email"
          name="email"
          type="text"
          placeholder=""
          value={email}
          required={true}
          autoComplete="email"
          errorMessage={emailErrorMessage}
          handleChange={handleChange}
          setStateVariable={setEmail}
        />
        <ContactFormInput
          inputType="textarea"
          label="Message"
          name="message"
          type="text"
          placeholder=""
          value={message}
          required={true}
          autoComplete="off"
          errorMessage={messageErrorMessage}
          handleChange={handleChange}
          setStateVariable={setMessage}
        />

        <div className="flex justify-center items-center p-6 mt-4">
          <span
            className={clsx(
              "transition-opacity duration-700",
              isFormValid && !buttonSubmitted ? "opacity-100" : "opacity-60"
            )}>
            <button
              id="contact-form-submit-button"
              onClick={handleFormSubmit}
              type="submit"
              disabled={!isFormValid || buttonSubmitted}
              aria-disabled={!isFormValid || buttonSubmitted}
              className={clsx(
                "text-shadow-black border border-2 rounded-2xl py-1 px-6 transition-colors transition-shadow transition-transform duration-700 ease-in-out font-semibold tracking-widest will-change-transform",
                {
                  // enabled styles
                  "bg-neutral-800 text-green-500 border-green-500 hover:border-neutral-800 hover:bg-green-500 hover:text-white cursor-pointer shadow-lg shadow-green-500/50 hover:scale-105 active:scale-95":
                    isFormValid && !buttonSubmitted,
                  // disabled styles
                  "border-green-600 text-green-600 cursor-not-allowed":
                    !isFormValid || buttonSubmitted,
                }
              )}>
              {buttonSubmitted ? "Message Sent!" : "Send"}
            </button>
          </span>
        </div>
      </form>
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}