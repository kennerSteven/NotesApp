import "../Layout/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="containerSidebar ">
      <div className="contentSidebar">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <button title="Crear Tarea" className="btnSidebar">
            <i className="bi bi-plus-lg"></i>
          </button>
          <p className="labelBtnSidebar">Tasks</p>
          <button title="Tareas Completadas" className="btnSidebar">
            <i className="bi bi-check2-circle"></i>
          </button>
          <p className="labelBtnSidebar">Completed</p>
          <button title="Diario" className="btnSidebar">
            <i className="bi bi-journal-text"></i>
          </button>
          <p className="labelBtnSidebar">Diary</p>
          <div>
            <button title="Papelera" className="btnSidebar">
              <i className="bi bi-trash"></i>
            </button>
            <p className="labelBtnSidebar">Trash</p>
          </div>
          <button title="Cerrar Sesión" className="btnSidebar">
            <i className="bi bi-box-arrow-right text-danger"></i>
          </button>
          <p className="labelBtnSidebar text-danger">Log out</p>
        </div>
      </div>
    </div>
  );
}
