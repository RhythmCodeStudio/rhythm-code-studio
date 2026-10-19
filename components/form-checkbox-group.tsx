import FormCheckbox from "./form-checkbox";

type FormCheckboxGroupProps = {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (value: string) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export default function FormCheckboxGroup({
  legend,
  name,
  options,
  selectedValues,
  onChange,
  className,
  orientation = "vertical",
}: FormCheckboxGroupProps) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      <div
        className={`flex ${orientation === "vertical" ? "flex-col space-y-2" : "flex-row space-x-4"}`}
      >
        {options.map(({ value, label }) => (
          <FormCheckbox
            key={value}
            name={name}
            value={value}
            label={label}
            checked={selectedValues.includes(value)}
            onChange={() => onChange(value)}
            inputClassName="accent-black"
          />
        ))}
      </div>
    </fieldset>
  );
}