import type { SelectType } from "./Type";
import "./Input.css";
import { dataSelect } from "./Data";
export default function Select({ name, value, onChange }: SelectType) {
  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        {dataSelect.map((key, item) => (
          <option key={key}>{item}</option>
        ))}
      </select>
    </div>
  );
}
