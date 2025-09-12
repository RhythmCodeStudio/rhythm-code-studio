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
  value: any;
  required: boolean;
  autoComplete: string;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<any>>) => void;
  setStateVariable: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    // <div className="flex flex-col justify-start">
    <div className="flex flex-col py-1">
      <label
        // className="m-2 text-left text-base"
        className="px-4 font-bold"
        htmlFor={name}>{label}
        {required && <><span>*</span><span className="text-xs"> (required)</span></>}
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
            // className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-300 font-share-tech-mono tracking-wide text-shadow-green h-80 resize-none text-lg"
             className="rounded-full px-4 opacity-75 h-80 resize-none"
          />
      ) : (
        <input
          // className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-300 font-share-tech-mono tracking-wide text-shadow-green text-lg h-10"
          className="rounded-full px-4 opacity-75"
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
        className="text-red-200 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}
      >
        {errorMessage || " "}
      </p>
    </div>
  );
}