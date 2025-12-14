import { useState, useEffect, useRef } from "react";
import ButtonAct from "../Ui/ButtonActions/ButtonAct";
import "../TodoList/TableTodo.css";

interface prop {
  iconCategory: string;
  title: string;
  date: string;
  functionBtnAct: () => void;
  functionBtnDelet: () => void;
}

export default function TableTodo({
  title,
  date,
  functionBtnDelet,
  functionBtnAct,
  iconCategory,
}: prop) {
  const [actions, setActions] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function showActions() {
    setActions(true);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="TaskContainer"
      onMouseLeave={() => setActions(false)}
    >
      <div className="d-flex align-items-center justify-content-between gap-3 Task">
        <div className="d-flex align-items-center gap-3">
          <div>
            <input className="radioInput fs-1" type="radio" />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex gap-2">
              <p className="m-0" style={{ fontWeight: "600" }}>
                {title}
              </p>
              <i className={iconCategory}></i>
            </div>
            <small className="text-muted">
              To completed in {date.toString()}
            </small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {actions && (
            <div className="d-flex flex-column rounded">
              <div className="d-flex">
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
          )}
          <i
            className="bi bi-three-dots-vertical"
            onClick={showActions}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
