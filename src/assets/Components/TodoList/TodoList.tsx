import { useState } from "react";
import Button from "../Ui/Button/Button";
import Input from "../Ui/Input/Input";
import TableTodo from "./TableTodo";
import "./TodoList.css";
import useModal from "../Context/ModalConfirmation/UseModal";
import useToast from "../Context/Toast/UseToast";
import ModalEdit from "./ModalEdit";

interface task {
  date: string;
  name: string;
  id: string;
}

export default function TodoList() {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<task[]>([]);



  
  const { openModal } = useModal();
  const { show } = useToast();

  const [idEdit, setIdEdit] = useState<string>("");
  const [valueEdit, setValueEdit] = useState<string>("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setValue(e.target.value);
  }

  function addTask() {
    const date = new Date();
    const dateFormated = date.toLocaleTimeString();
    const idAutomatic = crypto.randomUUID();

    setTasks((prev) => [
      ...prev,
      { id: idAutomatic, date: dateFormated, name: value },
    ]);

    console.log(tasks);
    showToaster();
  }

  function showToaster() {
    show({
      title: "Accion completada",
      text: "La accion fue completada exitosamente!",
      icon: "success",
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim() === "") {
      return setError("Please insert a task");
    }
    openModal({
      textModal: "Are you right to create this task?",
      titleModal: "Create Task",
      onConfirm: addTask,
    });

    setValue("");
    setError("");
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  function confirmDelete(id: string) {
    openModal({
      textModal: "Are you right to delete this task?",
      titleModal: "Create Task",
      onConfirm: () => deleteTask(id),
    });
  }

  function modalUpdate(id: string, name: string) {
    setShowEdit(true);
    setValueEdit(name);
    setIdEdit(id);
  }

  function handleInputEdit(e: React.ChangeEvent<HTMLInputElement>) {
    setValueEdit(e.target.value);
  }

  function AceptEdit() {
    setShowEdit(false);

    const date = new Date();
    const dateFormated = date.toLocaleTimeString();

    setTasks((prev) =>
      prev.map((task) =>
        task.id === idEdit
          ? { ...task, name: valueEdit, date: dateFormated, id: idEdit }
          : task
      )
    );
  }

  function closeEditModal() {
    setShowEdit(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" d-flex justify-content-center align-items-center min-vh-100">
          <div className="toDoContainer" style={{ minWidth: "500px" }}>
            <h2 className="py-3 fw-bold text-center">Todo list!</h2>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <div>
                <Input
                  placeholder="Write a task..."
                  label="New task"
                  value={value}
                  name=""
                  onChange={handleInput}
                  error=""
                />
                {error && <small className="text-danger pt-2">{error}</small>}
              </div>
              <div>
                <Button colorMode={false} labelButton="Add Task" />
              </div>
            </div>
            {tasks.map((item) => (
              <div key={item.id}>
                <TableTodo
                  title={item.name}
                  date={item.date}
                  functionBtnAct={() => modalUpdate(item.id, item.name)}
                  functionBtnDelet={() => confirmDelete(item.id)}
                />
              </div>
            ))}

            {showEdit && (
              <div>
                <ModalEdit
                  textModal="Please write anythig to edit this task"
                  titleModal="Update task"
                  AcceptFunction={AceptEdit}
                  CancelFunction={closeEditModal}
                  onChange={handleInputEdit}
                  value={valueEdit}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
