import "./Modal.css";

interface props {
  textModal: string;
  titleModal: string;
  AcceptFunction: () => void;
  CancelFunction: () => void;
}

export default function Modal({
  textModal,
  titleModal,
  AcceptFunction,
  CancelFunction,
}: props) {
  return (
    <div className="modalOverlay">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="modalContainer">
          <h2 className="titleModal">{titleModal}</h2>
          <p>{textModal}</p>
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
