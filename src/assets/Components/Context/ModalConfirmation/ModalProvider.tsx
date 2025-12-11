import React, { useState } from "react";
import Modal from "./Modal";

import { ModalContext } from "./ModalContext";

import type { optionsOpenModal } from "./Type";
interface props {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: props) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setDataModal] = useState<optionsOpenModal>({
    onConfirm: () => {},
    titleModal: "",
    textModal: "",
  });
  const [confirm, setConfirm] = useState<null | (() => void)>(null);

  // const { isLoading, setIsLoading } = useLoadingContext();

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
    // setIsLoading(true);
    setOpen(false);
  }

  // if (isLoading) {
  //   return (
  //     <div>
  //       <p>Cargando...</p>
  //     </div>
  //   );
  // }

  const ModalValue = {
    openModal,
  };

  return (
    <div>
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
    </div>
  );
}
