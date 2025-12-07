import { createContext } from "react";
import type { modalOptions } from "./Type";
export const ModalContext = createContext<modalOptions | null>(null);
