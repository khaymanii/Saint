interface Props {
  label: string;
  value: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileInput({
  label,
  value,
  type = "text",
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#063c71]"
      />
    </div>
  );
}
