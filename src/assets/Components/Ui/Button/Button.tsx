import type { ButtonTypes } from "./Types";
import "../Button/Button.css";

export default function Button({
 
  colorMode,
  labelButton,
}: ButtonTypes) {
  return (
    <div>
      <button
        type="submit"
      
        className={colorMode ? "btnLightMode btnStyle" : "btnDarkMode btnStyle"}
      >
        {labelButton}
      </button>
    </div>
  );
}
