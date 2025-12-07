import { ModalContext } from "./ModalContext";
import { useContext } from "react";
export default function useModal() {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error("Context about modal not permited");
  }
  return context;
}
