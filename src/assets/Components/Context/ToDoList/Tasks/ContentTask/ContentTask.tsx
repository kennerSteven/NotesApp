import ModalEdit from "../../../../TodoList/ModalEdit";
import TableTodo from "../../../../TodoList/TableTodo";
import { useFnTask } from "../useReducer";

export default function ContentTask() {
  const { state, objetFuncTasks } = useFnTask();
  const { enoughTask, dateToDoEdit, editName, editCategory } = state;
  const {
    acceptEdit,
    handleCategoryEdit,
    handleDateToDoEdit,
    handleNameEdit,
    modalUpdate,
    confirmDelete,
  } = objetFuncTasks;

  function asdd() {}

  return (
    <div>
      {state.tasks.length === 0 && (
        <div
          className="d-flex align-items-center justify-content-center m- "
          style={{ marginTop: "150px" }}
        >
          <div className="d-flex flex-column align-items-center  p-2 rounded  ">
          <i className="bi bi-clipboard-x text-muted" style={{fontSize:"60px"}}></i>

            <small className="text-muted">{enoughTask}</small>
          </div>
        </div>
      )}

      {state.showEdit && (
        <div>
          <ModalEdit
            textModal="Please write anythig to edit this task"
            titleModal="Update task"
            AcceptFunction={acceptEdit}
            CancelFunction={asdd}
            valueDateToDoTask={dateToDoEdit}
            handleDateInput={handleDateToDoEdit}
            handleName={handleNameEdit}
            valueName={editName}
            valueCategory={editCategory}
            handleInputCategory={handleCategoryEdit}
          />
        </div>
      )}

      <div className="row flex-column mx-3  gap-4">
        {state.tasks.map((item) => (
          <div key={item.id} className="">
            <TableTodo
              iconCategory={
                item.category === "work"
                  ? "bi-briefcase-fill text-primary"
                  : item.category === "personal"
                  ? "bi-person-fill text-danger"
                  : item.category === "study"
                  ? "bi-book-fill text-success"
                  : item.category === "other"
                  ? "bi-three-dots text-muted"
                  : ""
              }
              title={item.name}
              dateCreated={item.date}
              date={item.dateToComplete as string}
              functionBtnAct={() =>
                modalUpdate(
                  item.id,
                  item.name,
                  item.status,
                  item.dateToComplete ?? "",
                  item.category
                )
              }
              functionBtnDelet={() => confirmDelete(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
