import { createContext } from "react";
import type { ILoadingContext } from "./Types";

export const LoadingContext = createContext<ILoadingContext | null>(null);
export type { ILoadingContext };
