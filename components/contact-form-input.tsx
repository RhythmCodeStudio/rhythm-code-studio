// "use client";
// // import theme
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";
// // import clsx
// import clsx from "clsx";

// export default function ContactFormInput({
//   inputType,
//   label,
//   name,
//   type,
//   placeholder,
//   value,
//   required,
//   autoComplete,
//   errorMessage,
//   handleChange,
//   setStateVariable,
// }: {
//   inputType: string;
//   label: string;
//   name: string;
//   type: string;
//   placeholder: string;
//   value: string;
//   required: boolean;
//   autoComplete: string;
//   errorMessage: string;
//   handleChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     setState: React.Dispatch<React.SetStateAction<string>>
//   ) => void;
//   setStateVariable: React.Dispatch<React.SetStateAction<string>>;
// }) {
//   const theme = useTheme();
//   const themeObj = themes[theme.theme];
//   const color = themeObj.color;
//   const textShadow = themeObj.textShadow;

//   return (
//     <div className={`flex flex-col py-1 text-${color} ${textShadow}`}>
//       <label
//         className="px-2 font-bold"
//         htmlFor={name}>
//         {label}
//         {required && (
//           <>
//             <span>*</span>
//             <span className="text-xs"> (required)</span>
//           </>
//         )}
//       </label>
//       {inputType === "textarea" ? (
//         <textarea
//           autoComplete="off"
//           maxLength={1000}
//           onChange={(e) => handleChange(e, setStateVariable)}
//           value={value}
//           required
//           name="message"
//           id="message"
//           className={`rounded-3xl px-4 py-2 opacity-75 h-40 resize-none border-2 border-${color} bg-white text-black shadow-md shadow-${color}`}
//         />
//       ) : (
//         <input
//           className={`rounded-3xl px-4 opacity-75 h-8 resize-none  border-2 border-${color} bg-white text-black shadow-md shadow-${color}`}
//           type={type}
//           id={name}
//           name={name}
//           placeholder={placeholder}
//           value={value}
//           required={required}
//           autoComplete={autoComplete}
//           onChange={(e) => handleChange(e, setStateVariable)}
//         />
//       )}
//       <p
//         className={`text-xs lg:text-sm mt-2 ml-4 min-h-[1rem] transition-opacity duration-300
//           ${errorMessage ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//       >
//         {errorMessage || " "}
//       </p>
//     </div>
//   );
// }

"use client";
// import theme
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";
// import clsx
import clsx from "clsx";

export default function ContactFormInput({
  inputType,
  label,
  name,
  type,
  placeholder,
  value,
  required,
  autoComplete,
  errorMessage,
  handleChange,
  setStateVariable,
}: {
  inputType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
  autoComplete: string;
  errorMessage: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  setStateVariable: React.Dispatch<React.SetStateAction<string>>;
}) {
  const theme = useTheme();
  const themeObj = themes[theme.theme];
  const color = themeObj.color;
  const textShadow = themeObj.textShadow;

  // --- NEW: Map theme color to Tailwind border color classes ---
  const borderColorClass = clsx({
    "border-black shadow-black": color === "black",
    "border-white shadow-white": color === "white",
    // Add more mappings if you add more theme colors
  });

  return (
    <div className={clsx("flex flex-col py-1", `text-${color}`, textShadow)}>
      <label
        className="px-2 font-bold"
        htmlFor={name}>
        {label}
        {required && (
          <>
            <span>*</span>
            <span className="text-xs"> (required)</span>
          </>
        )}
      </label>
      {inputType === "textarea" ? (
        <textarea
          autoComplete="off"
          maxLength={1000}
          onChange={(e) => handleChange(e, setStateVariable)}
          value={value}
          required
          name="message"
          id="message"
          className={clsx(
            "rounded-3xl px-4 py-2 opacity-75 h-40 resize-none bg-white text-black border-2 shadow-md",
            borderColorClass // <-- use dynamic border color
          )}
        />
      ) : (
        <input
          className={clsx(
            "rounded-3xl px-4 opacity-75 h-8 resize-none bg-white text-black border-2 shadow-md",
            borderColorClass // <-- use dynamic border color
          )}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          autoComplete={autoComplete}
          onChange={(e) => handleChange(e, setStateVariable)}
        />
      )}
      <p
        className={clsx(
          "text-xs lg:text-sm mt-2 ml-4 min-h-[1.25rem] transition-opacity duration-300",
          errorMessage ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {errorMessage || " "}
      </p>
    </div>
  );
}