import type { InputType } from "./Type";
import "./Input.css";

export default function Input({
  placeholder,
  name,
  value,
  onChange,
  // label,
  error,
}: InputType) {
  return (
    <div>
      <div className="d-flex flex-column">
        {/* <label className="form-label" style={{ fontWeight: "500" }}>
          {label}
        </label> */}
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {error && (
          <small className="error-message pt-1">
            Ingreso un usuario valido
          </small>
        )}
      </div>
    </div>
  );
}
