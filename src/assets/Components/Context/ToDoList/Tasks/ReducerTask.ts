import type { Action, State } from "./types.task";
export default function ReducerTask(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VALUE_CATEGORY":
      return { ...state, valueCategory: action.valueCategory };

    case "SET_VALUE_DATE":
      return { ...state, valueDate: action.valueDate };

    case "SET_VALUE_NAME":
      return { ...state, valueName: action.valueName };

    //Get value of all inputs

    case "ADD_TASK": {
      const dateFormated = new Date().toLocaleTimeString();
      const idAutomatic = crypto.randomUUID();

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: idAutomatic,
            date: dateFormated,
            name: state.valueName,
            category: state.valueCategory,
            dateToComplete: state.valueDate as any,
          },
        ],
        valueCategory: "",
        valueDate: "",
        valueName: "",
        error: "",
      };
    }
    case "SET_ERROR": {
      return { ...state, error: action.error };
    }

    case "DELETE_TASK": {
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.id)],
      };
    }

    case "OPEN_UPDATE": {
      return {
        ...state,
        idEdit: action.id,
        valueEdit: action.name,
        showEdit: action.showEdit,
      };
    }

    case "UPDATE_TASK": {
      const dateFormated = new Date().toLocaleTimeString();

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === state.idEdit
            ? { ...task, name: state.valueEdit, date: dateFormated }
            : task
        ),
        showEdit: false,
        idEdit: "",
        valueEdit: "",
      };
    }
    case "ENOUGH_TASK": {
      return { ...state, enoughTask: action.enoughTask };
    }

    case "VALUE_EDIT": {
      return { ...state, valueEdit: action.valueEdit };
    }

    default:
      return state; // siempre devolver algo
  }
}
