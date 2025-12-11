// export interface Task {
//   name: string;
//   id: string;
//   date: string;
// }

// export interface State {
//   value: string;
//   error: string;
//   tasks: Task[];
//   showEdit: boolean;
//   idEdit: string;
//   valueEdit: string;
//   deleteId: string;
//   valueInput: string;
// }

// export const InitialState: State = {
//   value: "",
//   error: "",
//   tasks: [],
//   idEdit: "",
//   showEdit: false,
//   valueEdit: "",
//   deleteId: "",
//   valueInput: "",
// };

// export type Action =
//   | { type: "SET_VALUE"; valueInput: string }
//   | { type: "SET_ERROR"; error: string }
//   | { type: "ADD_TASK" }
//   | { type: "OPEN_UPDATE"; id: string; name: string; showEdit: boolean }
//   | { type: "UPDATE_TASK" }
//   | { type: "DELETE_TASK"; id: string }
//   | { type: "CLOSE_EDIT" };
