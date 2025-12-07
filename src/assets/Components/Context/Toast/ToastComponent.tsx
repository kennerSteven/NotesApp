import { useState } from "react";
import { ContextToast } from "./ContextToast";
import type { ToastOptions, ToastType } from "./Types";
import Toast from "../../../Components/Ui/Toast/Toast";

interface props {
  children: React.ReactNode;
}

export default function ToastComponent({ children }: props) {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [dataToast, setDataToast] = useState<ToastOptions>({
    title: "",
    text: "",
    icon: "success",
  });

  function show(options: ToastOptions) {
    setShowToast(true);
    setDataToast(options);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  const toastContext: ToastType = {
    show,
    showToast,
    setShowToast,
  };

  return (
    <div>
      <ContextToast.Provider value={toastContext}>
        {children}
        {showToast && (
          <Toast
            icon={dataToast.icon}
            text={dataToast.title}
            titleText={dataToast.text}
          />
        )}
      </ContextToast.Provider>
    </div>
  );
}
