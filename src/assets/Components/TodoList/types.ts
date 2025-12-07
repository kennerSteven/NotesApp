export interface Task {
  id: string;
  date: string;
  name: string;
}

export interface State {
  value: string;
  error: string;
  showEdit: boolean;
  tasks: Task[];
  idEdit: string;
  valueEdit: string;
}

export const initialState: State = {
  value: "",
  error: "",
  showEdit: false,
  tasks: [],
  idEdit: "",
  valueEdit: "",
};

export type Action =
  | { type: "ADD_TASK"; name: string }
  | { type: "OPEN_UPDATE"; id: string; name: string; showEditModal: boolean }
  | { type: "UPDATE_TASK"; id: string; name: string }
  | { type: "DELETE_TASK"; id: string };
