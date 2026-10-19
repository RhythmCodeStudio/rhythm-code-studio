import type { ChangeEvent } from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface FormRadioGroupProps {
  legend: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

export default function FormRadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  required = false,
  className = "",
}: FormRadioGroupProps) {
  const groupId = `radio-${name}`;

  return (
    <fieldset className={`mb-4 ${className}`}>
      <legend className="mb-2 font-semibold">{legend}</legend>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option, index) => {
          const id = `${groupId}-${index}`;

          return (
            <label key={option.value} htmlFor={id} className="flex items-center gap-2">
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChange(event.target.value)
                }
                required={required}
                className="accent-black"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}