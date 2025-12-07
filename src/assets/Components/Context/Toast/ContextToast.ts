import { createContext } from "react";
import type { ToastType } from "./Types";

export const ContextToast = createContext<ToastType | null>(null)