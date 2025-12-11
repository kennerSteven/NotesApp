import { useContext } from "react";
import { ContextTask } from "./ContextTask";
import type { TaskContextType } from "./types.task";

export function useFnTask(): TaskContextType {
  const context = useContext(ContextTask);

  if (context === null) {
    throw new Error("ContextTask not available");
  }

  return context;
}
