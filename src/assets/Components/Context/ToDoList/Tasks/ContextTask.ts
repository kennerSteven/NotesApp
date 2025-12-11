import { createContext } from "react";
import type { propsTasks } from "./types.task";
export const ContextTask = createContext<propsTasks | null>(null);
