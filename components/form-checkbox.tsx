import { ChangeEvent } from "react";

interface FormCheckboxProps {
  label: string;
  name: string;
  value?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errorMessage?: string;
  idPrefix?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function FormCheckbox({
  label,
  name,
  value,
  checked,
  onChange,
  required = false,
  errorMessage = "",
  idPrefix = "",
  className = "",
  labelClassName = "",
  inputClassName = "",
}: FormCheckboxProps) {
  const uniqueInputId = idPrefix ? `${idPrefix}-${name}` : name;

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={uniqueInputId}
        className={`m-2 text-left text-base flex items-start gap-2 ${labelClassName}`}>
        <input
          id={uniqueInputId}
          name={name}
          value={value}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          className={`mt-1 h-4 w-4 ${
            inputClassName || "accent-blue-500"
          } cursor-pointer`}
        />
        <span>
          {label}
          {required && (
            <>
              <span>*</span>
              <span className="text-xs"> (required)</span>
            </>
          )}
        </span>
      </label>

      <p
        className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
        style={{
          visibility: errorMessage ? "visible" : "hidden",
          opacity: errorMessage ? 1 : 0,
        }}>
        {errorMessage || " "}
      </p>
    </div>
  );
}
