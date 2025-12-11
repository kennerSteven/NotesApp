import "../Loading/Loading.css";
export default function Loading() {
  return (
    <div className="loadingContent ">
      <div className=" ">
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="loadingContainer d-flex  align-items-center ">
            <div>
              <p className=" pt-3 pe-3">Loading ToDo-list App...</p>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden text-center">Loading ...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
