import { useContext, useEffect, useReducer } from "react";
import { ContextTask } from "./ContextTask";
import ReducerTask from "./ReducerTask";
import { showModalContext } from "./CreateTask/ShowModal";
import useToast from "../../Toast/UseToast";
import useModal from "../../ModalConfirmation/UseModal";
import { InitialState } from "./types.task";
import type { PropsTasks } from "./types.task";

interface Props {
  children: React.ReactNode;
}

export default function TaskProvider({ children }: Props) {
  const [state, dispatch] = useReducer(ReducerTask, InitialState);

  const { openModal } = useModal();
  const { show } = useToast();

  useEffect(() => {
    if (state.tasks.length === 0) {
      dispatch({ type: "ENOUGH_TASK", enoughTask: "No tasks available" });
    } else {
      dispatch({ type: "ENOUGH_TASK", enoughTask: "" });
    }
  }, [state.tasks.length]);

  function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_VALUE_NAME", valueName: e.target.value });
  }

  function handleInputDate(e: { value: Date | null }) {
    const date: any = e.value?.toLocaleDateString();
    dispatch({ type: "SET_VALUE_DATE", valueDate: date });
  }

  function handleInputCategory(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_VALUE_CATEGORY", valueCategory: e.target.value });
  }

  function AddTask() {
    dispatch({ type: "ADD_TASK" });
    show({
      text: "Task has been created!",
      title: "Task created",
      icon: "success",
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validate =
      !state.valueName || !state.valueDate || !state.valueCategory;

    if (validate) {
      show({
        text: "Please complete all fields",
        title: "Task error",
        icon: "danger",
      });
      dispatch({ type: "SET_ERROR", error: "Please complete all fields" });
      return;
    }

    openModal({
      textModal: "Are you sure to create this task?",
      titleModal: "Create Task",
      onConfirm: AddTask,
    });

    console.log(`Value name task : ${state.valueName}`);
    console.log(`Value category task : ${state.valueCategory}`);
    console.log(`Value date task : ${state.valueDate}`);
  }

  function deleteTask(id: string) {
    dispatch({ type: "DELETE_TASK", id });
  }

  function confirmDelete(id: string) {
    openModal({
      textModal: "Are you sure to delete this task?",
      titleModal: "Delete Task",
      onConfirm: () => deleteTask(id),
    });
  }

  function modalUpdate(id: string, name: string) {
    dispatch({ type: "OPEN_UPDATE", id, name, showEdit: true });
  }

  function handleInputEdit(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "VALUE_EDIT", valueEdit: e.target.value });
  }

  function acceptEdit() {
    dispatch({ type: "UPDATE_TASK" });
  }

  const objetFuncTasks: PropsTasks = {
    AddTask,
    deleteTask,
    acceptEdit,
    handleInputEdit,
    modalUpdate,
    confirmDelete,
    handleSubmit,
    handleInputName,
    handleInputDate,
    handleInputCategory,
  };

  return (
    <ContextTask.Provider
      value={{
        state,
        objetFuncTasks,
      }}
    >
      {children}
    </ContextTask.Provider>
  );
}
