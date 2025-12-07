import "./Toast.css";

interface props {
  icon: "success" | "danger";
  titleText: string;
  text: string;
}

export default function Toast({ icon, titleText, text }: props) {
  const setStyleIcon =
    icon === "success"
      ? "toastSuccess  bi bi-check-lg"
      : "toastDanger  bi bi-x-circle-fill";

  return (
    <div className="toast d-flex justify-content-end ">
      <div className="ToastContainer  ps-3">
        <div className="d-flex gap-3 ">
          <div>
            <i className={`icon ${setStyleIcon}`}></i>
          </div>

          <div className="d-flex flex-column">
            <div>
              <p className="m-0 titleToast">{text}</p>
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
