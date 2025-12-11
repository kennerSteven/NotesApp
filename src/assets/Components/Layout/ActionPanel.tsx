import Sidebar from "./Sidebar";
import "../Layout/ActionPanel.css";
import React, { useEffect, useState } from "react";

interface props {
  contentActionPanel: React.ReactNode;
  BottonSection: React.ReactNode;
}

export default function ActionPanel({
  contentActionPanel,
  BottonSection,
}: props) {
  const [hour, setHour] = useState(new Date().getHours());
  const [timeString, setTimeString] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: true })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setHour(new Date().getHours());
      setTimeString(new Date().toLocaleTimeString("en-US", { hour12: true }));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  let iconDay = "";
  if (hour >= 6 && hour < 12) {
    iconDay = "bi bi-sunrise text-warning";
  } else if (hour >= 12 && hour < 18) {
    iconDay = "bi bi-brightness-high text-primary";
  } else {
    iconDay = "bi bi-moon-stars text-info";
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="ActionPanelContent">
          <div className="d-flex h-100">
            <div className="a">
              <Sidebar />
            </div>
            <div className="d-flex flex-column justify-content-between w-100">
              {/* 🔹 TopBar */}
              <div className="TopBar d-flex align-items-center p-2 justify-content-between">
                <div>
                  <h2 className="titleTopbar">Tasks to do!</h2>
                </div>
                <div className="d-flex flex-column align-items-center bg-white px-4 py-2 rounded">
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <i className={`${iconDay} fs-2`}></i>
                    </div>
                    <div>
                      <p className="m-0 fw-bold">{timeString}</p>
                      <small className="m-0">
                        {new Date().toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow-1 px-3 pt-3 contentAction">
                {contentActionPanel}
              </div>

              <div className="d-flex justify-content-end BottonSection py-2">
                {BottonSection}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
