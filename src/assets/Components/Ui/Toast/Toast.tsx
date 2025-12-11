import "./Toast.css";

interface props {
  icon: "success" | "danger";
  titleText: string;
  text: string;
}

export default function Toast({ icon, titleText, text }: props) {
  const setStyleIcon =
    icon === "success"
      ? "toastSuccess  bi bi-check-circle"
      : "toastDanger  bi bi-x-circle-fill";

  const setTypeToast =
    icon === "success" ? "toastContainerSuccess " : "toastContainerDanger ";

  return (
    <div className="toast d-flex justify-content-center">
      <div className="ps-3">
        <div className={`${setTypeToast}  ToastContainer`}>
          <div className="d-flex gap-1 align-items-center">
            <div>
              <i className={`icon ${setStyleIcon}`}></i>
            </div>

            <div>
              <small>{titleText}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
