import type { Action, State } from "./types.task";

export default function ReducerTask(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VALUE_CATEGORY":
      return { ...state, valueCategory: action.valueCategory };

    case "SET_VALUE_DATE":
      return {
        ...state,
        valueDate: action.valueDate,
      };

    case "ERROR_NAME":
      return {
        ...state,
        ErrorName: action.ErrorName,
      };

    case "ERROR_DATE":
      return {
        ...state,
        ErrorDate: action.ErrorDate,
      };

    case "ERROR_CATEGORY":
      return {
        ...state,
        ErrorCategory: action.ErrorCategory,
      };

    case "SET_VALUE_NAME":
      return { ...state, valueName: action.valueName };

    case "ADD_TASK": {
      const timeCreated = new Date().toISOString().split("T")[0];

      const idAutomatic = crypto.randomUUID();

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: idAutomatic,
            name: state.valueName,
            category: state.valueCategory,
            date: timeCreated,
            status: "No completed",
            dateToComplete: state.valueDate,
          },
        ],
        valueCategory: "",
        valueDate: "",
        valueName: "",
        error: "",
      };
    }

    case "SET_ERROR":
      return { ...state, error: action.error };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    case "OPEN_UPDATE":
      return {
        ...state,
        idEdit: action.id,
        editName: action.nameEdit,
        dateToDoEdit: action.dateToDoEdit,
        editCategory: action.categoryEdit,
        editState: action.statusEdit,
        showEdit: true,
      };

    case "UPDATE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === state.idEdit
            ? {
                ...task,
                name: state.editName,
                dateToComplete: state.dateToDoEdit,
                category: state.editCategory,
                status: state.editState,
              }
            : task
        ),
        showEdit: false,
        idEdit: "",
        editName: "",
        editCategory: "",
        dateToDoEdit: "",
      };
    }

    case "ENOUGH_TASK":
      return { ...state, enoughTask: action.enoughTask };

    case "EDIT_NAME":
      return {
        ...state,
        editName: action.editName,
      };

    case "EDIT_DATETODO":
      return {
        ...state,
        dateToDoEdit: action.editDateTodo,
      };

    case "EDIT_CATEGORY":
      return {
        ...state,
        editCategory: action.editCategory,
      };

    case "EDIT_STATE":
      return {
        ...state,
        editState: action.editState,
      };

    default:
      return state;
  }
}
