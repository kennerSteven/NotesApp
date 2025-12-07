import "./ButtonAct.css";

interface props {
  Action: "update" | "delete";
  label: string;
  functionBtnAct: () => void;
}

export default function ButtonAct({ Action, label, functionBtnAct }: props) {
  return (
    <>
      <button
        type="button"
        onClick={functionBtnAct}
        className={`d-flex gap-2 btnAct ${
          Action === "update" ? "btnActUpdate" : "btnActDelete"
        }`}
      >
        <i
          className={`${
            Action === "update" ? "bi bi-pencil-square" : "bi bi-trash"
          } `}
        ></i>
        {label}
      </button>
    </>
  );
}
