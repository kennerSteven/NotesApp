import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ModalProvider from "./assets/Components/Context/ModalConfirmation/ModalProvider";
import ToastComponent from "./assets/Components/Context/Toast/ToastComponent";
import LoadingComponent from "./assets/Components/Context/Loading/LoadingComponent";

import Tasks from "./assets/Components/TodoList/Tasks";
import TaskProvider from "./assets/Components/Context/ToDoList/Tasks/TaskProvider";
import ShowModalTaskProvider from "./assets/Components/Context/ToDoList/Tasks/CreateTask/ShowModal";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShowModalTaskProvider>
      {" "}
      {/* ✅ debe envolver todo */}
      <ModalProvider>
        <ToastComponent>
          <LoadingComponent>
            <TaskProvider>
              <Tasks />
            </TaskProvider>
          </LoadingComponent>
        </ToastComponent>
      </ModalProvider>
    </ShowModalTaskProvider>
  </StrictMode>
);
