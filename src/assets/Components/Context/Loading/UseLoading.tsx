import { useContext } from "react";
import { LoadingContext } from "./LoadingContext";
import type { ILoadingContext } from "./LoadingContext";

export function useLoadingContext(): ILoadingContext {
  const context = useContext(LoadingContext);

  if (context === null) {
    throw new Error(
      "useLoadingContext debe ser usado dentro de LoadingComponent."
    );
  }

  return context;
}
