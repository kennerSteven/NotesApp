import type { GeneralButtonTypes } from "./type";
import "../GeneralButton/GeneralButton.css";

export default function GeneralButton({
  colorMode,
  labelButton,
  onClick,
}: GeneralButtonTypes) {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className={colorMode ? "btnLightMode btnStyle" : "btnDarkMode btnStyle"}
      >
        {labelButton}
      </button>
    </div>
  );
}
