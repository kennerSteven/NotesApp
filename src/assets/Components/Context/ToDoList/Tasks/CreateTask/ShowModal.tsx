import { createContext, useState, type ReactNode } from "react";

// 🔹 Tipos del contexto
export interface ShowModalCreateTaskContext {
  showModalTask: boolean;
  setShowModalTask: React.Dispatch<React.SetStateAction<boolean>>;
}

// 🔹 Props del provider
interface Props {
  children: ReactNode;
}

// 🔹 Crear contexto con valor inicial null
export const showModalContext =
  createContext<ShowModalCreateTaskContext | null>(null);

// 🔹 Provider funcional
export default function ShowModalTaskProvider({ children }: Props) {
  const [showModalTask, setShowModalTask] = useState<boolean>(false);

  return (
    <showModalContext.Provider value={{ showModalTask, setShowModalTask }}>
      {children}
    </showModalContext.Provider>
  );
}
