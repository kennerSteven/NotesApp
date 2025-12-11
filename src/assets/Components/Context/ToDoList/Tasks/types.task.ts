import type { ChangeEvent } from "react";

export interface Task {
  name: string;
  id: string;
  date: string;
}

export interface PropsTasks {
  AddTask: () => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTask: (id: string) => void;
  confirmDelete: (id: string) => void;
  modalUpdate: (id: string, name: string) => void;
  handleInputEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  acceptEdit: () => void;
}

export interface State {
  value: string;
  error: string;
  tasks: Task[];
  showEdit: boolean;
  idEdit: string;
  valueEdit: string;
  deleteId: string;
  valueInput: string;
  enoughTask: string;
}

export const InitialState: State = {
  value: "",
  error: "",
  tasks: [],
  idEdit: "",
  showEdit: false,
  valueEdit: "",
  deleteId: "",
  valueInput: "",
  enoughTask: "",
};

/* Tipo final del Context */
export interface TaskContextType {
  state: State;
  objetFuncTasks: PropsTasks;
}

export type Action =
  | { type: "SET_VALUE"; valueInput: string }
  | { type: "SET_ERROR"; error: string }
  | { type: "ADD_TASK" }
  | { type: "OPEN_UPDATE"; id: string; name: string; showEdit: boolean }
  | { type: "UPDATE_TASK" }
  | { type: "DELETE_TASK"; id: string }
  | { type: "CLOSE_EDIT" }
  | { type: "ENOUGH_TASK"; enoughTask: string }
  | { type: "VALUE_EDIT"; valueEdit: string };
