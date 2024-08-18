export default function ContactFormInput({
  label,
  name,
  type,
  placeholder,
  value,
  required,
  errorMessage,
  handleChange,
  setStateVariable,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  required: boolean;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<any>>) => void;
  setStateVariable: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="flex flex-col py-1">
      <label
        className="px-4 font-bold"
        htmlFor={name}>{label.toUpperCase()}
        {required && <><span>*</span><span className="text-xs"> (required)</span></>}
      </label>
      <input
        className="rounded-2xl px-4 opacity-75"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => handleChange(e, setStateVariable)}
      />
      <p>{errorMessage}</p>
    </div>
  );
}