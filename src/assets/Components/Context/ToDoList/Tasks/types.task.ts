import type { ChangeEvent } from "react";

export interface Task {
  name: string;
  id: string;
  date: string;
  category: string;
  status: string;
  dateToComplete: null | string;
}

export interface PropsTasks {
  AddTask: () => void;
  handleInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputDate: (e: { value: null | string }) => void;
  handleInputCategory: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTask: (id: string) => void;
  confirmDelete: (id: string) => void;
  modalUpdate: (id: string, name: string,category:string,dateToDoEdit:string | null,status:string) => void;
  handleNameEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleStateEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDateToDoEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  acceptEdit: () => void;
}

export interface State {
  value: string;
  error: string;
  tasks: Task[];
  showEdit: boolean;
  idEdit: string;

  deleteId: string;
  enoughTask: string;
  valueName: string;
  valueDate: string;
  valueCategory: string;
  editName: string;
  editState: string;
  dateToDoEdit: string;
  editCategory: string;
  ErrorName: string;
  ErrorDate: string;
  ErrorCategory: string;
}

export const InitialState: State = {
  value: "",
  error: "",
  tasks: [],
  idEdit: "",
  showEdit: false,
  deleteId: "",
  valueName: "",
  valueDate: "",
  valueCategory: "",
  enoughTask: "",
  ErrorName: "",
  ErrorDate: "",
  ErrorCategory: "",
  editName: "",
  editState: "",
  dateToDoEdit: "",
  editCategory: "",
};

export interface TaskContextType {
  state: State;
  objetFuncTasks: PropsTasks;
}

export type Action =
  | { type: "SET_VALUE_NAME"; valueName: string }
  | { type: "SET_VALUE_DATE"; valueDate: string }
  | { type: "SET_VALUE_CATEGORY"; valueCategory: string }
  | { type: "SET_ERROR"; error: string }
  | { type: "ADD_TASK" }
  | {
      type: "OPEN_UPDATE";
      id: string;
      showEdit: boolean;
      nameEdit: string;
      statusEdit: string;
      dateToDoEdit: string;
      categoryEdit: string;
    }
  | { type: "UPDATE_TASK" }
  | { type: "DELETE_TASK"; id: string }
  | { type: "CLOSE_EDIT" }
  | { type: "ENOUGH_TASK"; enoughTask: string }
  | {
      type: "VALUE_EDIT";
    }
  | { type: "ERROR_DATE"; ErrorDate: string }
  | { type: "ERROR_CATEGORY"; ErrorCategory: string }
  | { type: "ERROR_NAME"; ErrorName: string }
  | { type: "EDIT_NAME"; editName: string }
  | { type: "EDIT_DATETODO"; editDateTodo: string }
  | { type: "EDIT_CATEGORY"; editCategory: string }
  | { type: "EDIT_STATE"; editState: string };
