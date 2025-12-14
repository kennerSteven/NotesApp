import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { ModalContext } from "./ModalContext";
import type { optionsOpenModal } from "./Type";
import { showModalContext } from "../ToDoList/Tasks/CreateTask/ShowModal";

interface Props {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setDataModal] = useState<optionsOpenModal>({
    onConfirm: () => {},
    titleModal: "",
    textModal: "",
  });

  const modalContext = useContext(showModalContext);

  if (!modalContext) {
    throw new Error(
      "ShowModalTaskProvider is missing. Wrap your app with <ShowModalTaskProvider>."
    );
  }

  const { setShowModalTask } = modalContext;
  const [confirm, setConfirm] = useState<(() => void) | null>(null);

  function openModal(options: optionsOpenModal) {
    setConfirm(() => options.onConfirm);
    setDataModal(options);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setConfirm(null);
  }

  function confirmModal() {
    if (confirm) confirm();
    setOpen(false);
    setShowModalTask(false);
  }

  const ModalValue = {
    openModal,
  };

  return (
    <ModalContext.Provider value={ModalValue}>
      {children}
      {open && (
        <Modal
          AcceptFunction={confirmModal}
          CancelFunction={closeModal}
          titleModal={data.titleModal}
          textModal={data.textModal}
        />
      )}
    </ModalContext.Provider>
  );
}
