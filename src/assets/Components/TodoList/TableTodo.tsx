import ButtonAct from "../Ui/ButtonActions/ButtonAct";

interface prop {
  title: string;
  date: string;
  functionBtnAct: () => void;
  functionBtnDelet: () => void;
}

export default function TableTodo({
  title,
  date,
  functionBtnAct,
  functionBtnDelet,
}: prop) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between rounded shadow-sm p-3 my-3">
        <div className="d-flex flex-column">
          <h5 className="fw-bold">{title}</h5>
          <small>{date.toString()}</small>
        </div>
        <div className="d-flex gap-2">
          <ButtonAct
            Action="update"
            functionBtnAct={functionBtnAct}
            label="Update"
          />
          <ButtonAct
            Action="delete"
            functionBtnAct={functionBtnDelet}
            label="Delete"
          />
        </div>
      </div>
    </div>
  );
}
