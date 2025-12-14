import ModalEdit from "../../../../TodoList/ModalEdit";
import TableTodo from "../../../../TodoList/TableTodo";
import { useFnTask } from "../useReducer";

export default function ContentTask() {
  const { state, objetFuncTasks } = useFnTask();
  const { enoughTask, valueEdit, valueDate } = state;
  const { acceptEdit, handleInputEdit, modalUpdate, confirmDelete } =
    objetFuncTasks;

  function asdd() {}

  return (
    <div>
      {state.showEdit && (
        <div>
          <ModalEdit
            textModal="Please write anythig to edit this task"
            titleModal="Update task"
            AcceptFunction={acceptEdit}
            CancelFunction={asdd}
            onChange={handleInputEdit}
            value={valueEdit}
          />
        </div>
      )}

      <p>{enoughTask}</p>

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
              date={item.dateToComplete}
              functionBtnAct={() => modalUpdate(item.id, item.name)}
              functionBtnDelet={() => confirmDelete(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
