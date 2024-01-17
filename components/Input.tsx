import { formDataType } from "@/types/formData";

interface InputProps {
  label: keyof formDataType;
  labelText: string;
  formData: formDataType;
  setFormData: (formData: formDataType) => void;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  labelText,
  formData,
  setFormData,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1.5 items-start">
      <label
        htmlFor={label}
        className="cursor-pointer text-gray-500 hover:text-black transition"
      >
        {labelText}
      </label>
      <input
        value={formData[label]}
        onChange={(e) => setFormData({ ...formData, [label]: e.target.value })}
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
        className="border border-gray-300 px-5 py-2.5 rounded-lg outline-none focus:border-black transition w-full"
      />
    </div>
  );
};

export default Input;
