interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  id,
  placeholder = "",
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value.trim())
        }
      />
    </div>
  );
}
