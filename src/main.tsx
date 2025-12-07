import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

useState;
import "bootstrap-icons/font/bootstrap-icons.css";

import ModalProvider from "./assets/Components/Context/ModalConfirmation/ModalProvider";
import PruebaModal from "./assets/PruebaModal";
import ToastComponent from "./assets/Components/Context/Toast/ToastComponent";
import LoadingComponent from "./assets/Components/Context/Loading/LoadingComponent";
import TodoList from "./assets/Components/TodoList/TodoList";
import TableTodo from "./assets/Components/TodoList/TableTodo";
import ButtonAct from "./assets/Components/Ui/ButtonActions/ButtonAct";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingComponent>
      <ToastComponent>
        <ModalProvider>
          <TodoList />
        </ModalProvider>
      </ToastComponent>
    </LoadingComponent>
  </StrictMode>
);
