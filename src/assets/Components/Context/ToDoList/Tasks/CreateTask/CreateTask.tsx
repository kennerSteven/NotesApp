import Input from "../../../../Ui/Input/Input";
import { Calendar } from "primereact/calendar";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Button from "../../../../Ui/Button/Button";
import "../CreateTask/CreateTask.css";
import { useFnTask } from "../useReducer";
import { showModalContext } from "./ShowModal";
import { useContext } from "react";
export default function CreateTask() {
  const { state, objetFuncTasks } = useFnTask();
  const {
    handleInputCategory,
    handleInputDate,
    handleInputName,
    handleSubmit,
  } = objetFuncTasks;

  const modalContext = useContext(showModalContext);

  if (!modalContext) {
    throw new Error(
      "ShowModalTaskProvider is missing. Wrap your app with <ShowModalTaskProvider>."
    );
  }
  const { setShowModalTask } = modalContext;

  const { valueName, valueDate, valueCategory } = state;

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 modalContainerTask ">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 bg-white rounded shadow-sm modalContentTask px-5"
      >
        <h2 className="fw-bold">Create a new task</h2>

        <div>
          <label className="fw-bold mb-2">New Task</label>
          <Input
            placeholder="Write a task"
            name="task"
            value={valueName}
            onChange={handleInputName}
            error=""
            label="New task"
          />
        </div>

        <div>
          <label className="fw-bold mb-2">Date to do the task</label>
          <Calendar
            value={valueDate}
            onChange={handleInputDate as any}
            dateFormat="dd/mm/yy"
            showIcon
            className="w-100"
          />
        </div>

        <div className="d-flex gap-3 mt-3 flex-wrap">
          {[
            {
              value: "work",
              label: "Work",
              icon: "bi-briefcase-fill",
              color: "text-primary",
            },
            {
              value: "personal",
              label: "Personal",
              icon: "bi-person-heart",
              color: "text-danger",
            },
            {
              value: "study",
              label: "Study",
              icon: "bi-book-half",
              color: "text-success",
            },
            {
              value: "other",
              label: "Other",
              icon: "bi-three-dots",
              color: "text-secondary",
            },
          ].map(({ value, label, icon, color }) => (
            <div key={value} className="d-flex align-items-center gap-2">
              <i className={`bi ${icon} ${color}`}></i>
              <label className="mb-0">{label}</label>
              <input
                className="inputRadio"
                type="radio"
                name="category"
                value={value}
                checked={valueCategory === value}
                onChange={handleInputCategory}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end mt-4">
          <div className="d-flex align-items-center">
            <button
              className="cancelButton"
              onClick={() => setShowModalTask(false)}
            >
              Cancel
            </button>
            <Button colorMode={false} labelButton="Create task" />
          </div>
        </div>
      </form>
    </div>
  );
}
