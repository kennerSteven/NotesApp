// import { useEffect, useReducer, useState } from "react";
// import Button from "../Ui/Button/Button";
// import Input from "../Ui/Input/Input";
// import TableTodo from "./TableTodo";
// import "./TodoList.css";
// import useModal from "../Context/ModalConfirmation/UseModal";
// import useToast from "../Context/Toast/UseToast";
// import ModalEdit from "./ModalEdit";
// import { InitialState } from "./types";
// import ReducerTodoList from "./HandleTodo";
// import { useLoadingContext } from "../Context/Loading/UseLoading";
// import Loading from "../Context/Loading/Loading";
// import Sidebar from "../Layout/Sidebar";
// import ActionPanel from "../Layout/ActionPanel";

// export default function TodoList() {
//   const { isLoading, setIsLoading } = useLoadingContext();
//   const [EnoughTask, setEnoughTask] = useState<string>("");
//   const [state, dispatch] = useReducer(ReducerTodoList, InitialState);
//   console.log(state);

//   const { openModal } = useModal();
//   const { show } = useToast();
//   const [valueEdit, setValueEdit] = useState<string>("");

//   useEffect(() => {
//     if (state.tasks.length === 0) {
//       setEnoughTask("Sin tareas");
//     } else {
//       setEnoughTask("");
//     }
//   }, [state.tasks.length]);

//   const cantidadTareas = state.tasks.length;

//   console.log("Cantidad de tareas", cantidadTareas);

//   function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
//     dispatch({ type: "SET_VALUE", valueInput: e.target.value });
//   }

//   function AddTask() {
//     dispatch({ type: "ADD_TASK" });
//     show({
//       text: "Task has been created!",
//       title: "Task created",
//       icon: "success",
//     });
//     dispatch({ type: "SET_VALUE", valueInput: "" });
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (state.valueInput.trim() === "") {
//       show({
//         text: "Please write a task",
//         title: "Task created",
//         icon: "danger",
//       });
//       return dispatch({ type: "SET_ERROR", error: "Please write a task" });
//     }
//     openModal({
//       textModal: "Are you right to create this task?",
//       titleModal: "Create Task",
//       onConfirm: AddTask,
//     });
//   }

//   function deleteTask(id: string) {
//     dispatch({ type: "DELETE_TASK", id: id });
//   }

//   function confirmDelete(id: string) {
//     openModal({
//       textModal: "Are you right to delete this task?",
//       titleModal: "Create Task",
//       onConfirm: () => deleteTask(id),
//     });
//   }

//   function modalUpdate(id: string, name: string) {
//     dispatch({ type: "OPEN_UPDATE", id: id, name: name, showEdit: true });
//   }

//   function handleInputEdit(e: React.ChangeEvent<HTMLInputElement>) {
//     setValueEdit(e.target.value);
//   }

//   function acceptEdit() {
//     dispatch({ type: "UPDATE_TASK" });
//   }

//   // function closeEditModal() {
//   //   setShowEdit(false);
//   // }

//   function vsa() {}

//   if (isLoading) {
//     return <Loading />;
//   } else {
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="menuInputTitle ">
//             <div className="contentMenuInput d-flex flex-column justify-content-end  align-items-end  w-100  ">

//               <div className="d-flex align-items-center  gap-3 m-2">
//                 <div>
//                   <Button colorMode={false} labelButton="Add Task" />
//                 </div>
//                 <div>
//                   <Input
//                     placeholder="Write a task..."
//                     label="New task"
//                     value={state.valueInput}
//                     name=""
//                     onChange={handleInput}
//                     error=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </form>
//       </div>
//     );
//   }
// }
