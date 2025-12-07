import type { Dispatch, SetStateAction } from "react";

export type iconToast = "success" | "danger";



export interface ToastOptions {
  title: string;
  text: string;
  icon: iconToast;
}


export interface ToastType {
  showToast: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  show: (options: {
    title: string;
    text: string;
    icon: iconToast;
  }) => void;
}
