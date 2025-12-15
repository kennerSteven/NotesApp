import { useEffect, useReducer } from "react";
import { ContextTask } from "./ContextTask";
import ReducerTask from "./ReducerTask";

import useToast from "../../Toast/UseToast";
import useModal from "../../ModalConfirmation/UseModal";
import { InitialState } from "./types.task";

interface Props {
  children: React.ReactNode;
}

export default function TaskProvider({ children }: Props) {
  const [state, dispatch] = useReducer(ReducerTask, InitialState);

  const { openModal } = useModal();
  const { show } = useToast();

  useEffect(() => {
    dispatch({
      type: "ENOUGH_TASK",
      enoughTask: state.tasks.length === 0 ? "No tasks available" : "",
    });
  }, [state.tasks.length]);

  function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_VALUE_NAME", valueName: e.target.value });
  }

  function handleInputDate(payload: { value: string | null } | null) {
    const date = payload?.value ?? "";
    dispatch({
      type: "SET_VALUE_DATE",
      valueDate: date,
    });
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

    let hasError = false;

    if (state.valueName.trim() === "") {
      dispatch({
        type: "ERROR_NAME",
        ErrorName: "Please write a name",
      });

      hasError = true;
    } else {
      dispatch({ type: "ERROR_NAME", ErrorName: "" });
    }

    if (state.valueCategory === "") {
      dispatch({
        type: "ERROR_CATEGORY",
        ErrorCategory: "Please select a category",
      });

      hasError = true;
    } else {
      dispatch({ type: "ERROR_CATEGORY", ErrorCategory: "" });
    }

    if (state.valueDate === "") {
      dispatch({
        type: "ERROR_DATE",
        ErrorDate: "Please choose a date",
      });

      hasError = true;
    } else {
      dispatch({ type: "ERROR_DATE", ErrorDate: "" });
    }

    if (hasError) {
      show({
        text: "Please,complete all camps!",
        title: "Task created",
        icon: "danger",
      });
      return;
    }

    openModal({
      textModal: "Are you sure to create this task?",
      titleModal: "Create Task",
      onConfirm: AddTask,
    });

    console.log("New task created:", state.tasks);
  }

  function deleteTask(id: string) {
    dispatch({ type: "DELETE_TASK", id });
    show({
      text: "Task has been deleted!",
      title: "",
      icon: "success",
    });
  }

  function confirmDelete(id: string) {
    openModal({
      textModal: "Are you sure to delete this task?",
      titleModal: "Delete Task",
      onConfirm: () => deleteTask(id),
    });
  }

  function modalUpdate(
    id: string,
    nameEdit: string,
    statusEdit: string,
    dateToDoEdit: string ,
    categoryEdit: string
  ) {
    dispatch({
      type: "OPEN_UPDATE",
      id,
      nameEdit,
      showEdit: true,
      statusEdit,
      dateToDoEdit,
      categoryEdit,
    });
  }

  function handleNameEdit(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "EDIT_NAME", editName: e.target.value });
  }
  function handleStateEdit(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "EDIT_STATE", editState: e.target.value });
  }

  function handleDateToDoEdit(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "EDIT_DATETODO", editDateTodo: e.target.value });
    console.log("Date",state.valueDate)
  }

  function handleCategoryEdit(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "EDIT_CATEGORY", editCategory: e.target.value });
  }

  function acceptEdit() {
    dispatch({ type: "UPDATE_TASK" });
       show({
        text: "Task has been updated!",
        title: "Task created",
        icon: "success",
      });
  }

  const objetFuncTasks = {
    AddTask,
    deleteTask,
    acceptEdit,
    handleCategoryEdit,
    handleDateToDoEdit,
    handleStateEdit,
    handleNameEdit,
    modalUpdate,
    confirmDelete,
    handleSubmit,
    handleInputName,
    handleInputDate,
    handleInputCategory,
  };

  return (
    <ContextTask.Provider value={{ state, objetFuncTasks }}>
      {children}
    </ContextTask.Provider>
  );
}
