import type { ChangeEvent } from "react";
import "../Ui/Input/Input.css";
import "../Context/ModalConfirmation/Modal.css";

interface props {
  textModal: string;
  titleModal: string;
  AcceptFunction: () => void;
  CancelFunction: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function ModalEdit({
  textModal,
  titleModal,
  AcceptFunction,
  CancelFunction,
  onChange,
  value,
}: props) {
  return (
    <div className="modalOverlay">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="modalContainer">
          <h2 className="titleModal">{titleModal}</h2>
          <p>{textModal}</p>
          <input type="text" onChange={onChange} value={value} />
          <div className="d-flex justify-content-end align-items-center gap-2">
            <div>
              <button onClick={CancelFunction} className="btnOutline">
                Cancelar
              </button>
            </div>
            <div>
              <button className="btnAction btnAccept" onClick={AcceptFunction}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
