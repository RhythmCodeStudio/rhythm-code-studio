"use client";
// import theme
import { useTheme } from "../context/theme-context";
import { themes } from "../lib/themes";

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

  return (
    <div className={`flex flex-col py-1 text-${color} ${textShadow}`}>
      <label
        className="px-4 font-bold"
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
          className={`rounded-3xl px-4 opacity-75 h-60 resize-none p-4 border-2 border-${color} bg-white text-black shadow-md shadow-${color}`}
        />
      ) : (
        <input
          className={`rounded-3xl px-4 opacity-75 h-10 resize-none p-4 border-2 border-${color} bg-white text-black shadow-md shadow-${color}`}
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
        className={`text-red-500 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300
          ${errorMessage ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {errorMessage || " "}
      </p>
    </div>
  );
}