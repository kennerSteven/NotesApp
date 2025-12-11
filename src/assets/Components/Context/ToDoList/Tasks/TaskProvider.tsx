import { useEffect, useReducer } from "react";
import { ContextTask } from "./ContextTask";
import ReducerTask from "./ReducerTask";

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

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_VALUE", valueInput: e.target.value });
  }

  function AddTask() {
    dispatch({ type: "ADD_TASK" });
    show({
      text: "Task has been created!",
      title: "Task created",
      icon: "success",
    });
    dispatch({ type: "SET_VALUE", valueInput: "" });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (state.valueInput.trim() === "") {
      show({
        text: "Please write a task",
        title: "Task error",
        icon: "danger",
      });
      dispatch({ type: "SET_ERROR", error: "Please write a task" });
      return;
    }

    openModal({
      textModal: "Are you sure to create this task?",
      titleModal: "Create Task",
      onConfirm: AddTask,
    });
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
    handleInput,
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
