import type { ChangeEvent } from "react";

export interface Task {
  name: string;
  id: string;
  date: string;
  category: string;
  dateToComplete: string;
}

export interface PropsTasks {
  AddTask: () => void;
  handleInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputDate: (e: { value: Date | null }) => void;
  handleInputCategory: (e: ChangeEvent<HTMLInputElement>) => void;
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
  enoughTask: string;
  valueName: string;
  valueDate: any;
  valueCategory: string;
}

export const InitialState: State = {
  value: "",
  error: "",
  tasks: [],
  idEdit: "",
  showEdit: false,
  valueEdit: "",
  deleteId: "",
  valueName: "",
  valueDate: null,
  valueCategory: "",
  enoughTask: "",
};

export interface TaskContextType {
  state: State;
  objetFuncTasks: PropsTasks;
}

export type Action =
  | { type: "SET_VALUE_NAME"; valueName: string }
  | { type: "SET_VALUE_DATE"; valueDate: Date | null }
  | { type: "SET_VALUE_CATEGORY"; valueCategory: string }
  | { type: "SET_ERROR"; error: string }
  | { type: "ADD_TASK" }
  | { type: "OPEN_UPDATE"; id: string; name: string; showEdit: boolean }
  | { type: "UPDATE_TASK" }
  | { type: "DELETE_TASK"; id: string }
  | { type: "CLOSE_EDIT" }
  | { type: "ENOUGH_TASK"; enoughTask: string }
  | { type: "VALUE_EDIT"; valueEdit: string };
