import type { ChangeEvent } from "react";
import "../Ui/Input/Input.css";
import "../Context/ModalConfirmation/Modal.css";

interface props {
  textModal: string;
  titleModal: string;
  AcceptFunction: () => void;
  CancelFunction: () => void;

  valueName: string;
  handleName: (e: ChangeEvent<HTMLInputElement>) => void;

  valueDateToDoTask: string;
  handleDateInput: (e: ChangeEvent<HTMLInputElement>) => void;

  valueCategory: string;
  handleInputCategory: (e: ChangeEvent<HTMLInputElement>) => void;
}


export default function ModalEdit({
  textModal,
  titleModal,
  AcceptFunction,
  CancelFunction,
  handleName,
  valueName,
  valueDateToDoTask,
  handleDateInput,
  handleInputCategory,
  valueCategory,
}: props) {
  return (
    <div className="modalOverlay">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="modalContainer">
          <h2 className="titleModal">{titleModal}</h2>
          <p>{textModal}</p>
       <div className="row align-items-center">
           <div className="col-lg-7">
            <label className="form-label fw-bold">Task name</label>
            <input
              className="inputTask"
              type="text"
              onChange={handleName}
              value={valueName}
            />
          </div>
          <div className="col-lg-5  ">
            <label className="fw-bold mb-2">Date to do the task</label>
            <input
              className="inputTask"
              type="date"
              value={valueDateToDoTask}
              onChange={handleDateInput}
            />
            {/* {ErrorDate && (
              <small className="text-danger">{ErrorDate}</small>
            )}  */}
          </div>
       </div>
          <div className="d-flex gap-3 mt-3 flex-wrap mt-4">
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
          <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
            <div>
              <button onClick={CancelFunction} className="btnOutline">
                Cancel
              </button>
            </div>
            <div>
              <button className="btnAction btnAccept" onClick={AcceptFunction}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
