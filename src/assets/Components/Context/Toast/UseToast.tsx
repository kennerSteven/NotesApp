import type { ToastType } from "./Types";
import { ContextToast } from "./ContextToast";
import { useContext } from "react";

export default function useToast(): ToastType {
  const context = useContext(ContextToast);

  if (context === null) {
    throw new Error("COntexto toast no puede ser null");
  }
  return context;
}
