import "./styles.css";

export interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  label?: string;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  name?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  label = "Seleccionar",
  disabled = false,
  name,
}: DropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <>
      <div className="dropdown-container">
        <h3>{label}</h3>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        >
          <option key={undefined} value={undefined} disabled selected>
            Elegir
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
