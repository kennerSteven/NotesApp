import Button from "../../../../Ui/Button/Button";
import Input from "../../../../Ui/Input/Input";
import { useFnTask } from "../useReducer";

export default function FooderTask() {
  const { state, objetFuncTasks } = useFnTask();
  const { valueInput } = state; //  aquí está el valor del input
  const { handleInput, handleSubmit } = objetFuncTasks; //  aquí las funciones

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center gap-3 m-2 "
      >
        <div>
          <Button colorMode={false} labelButton="Add Task" />
        </div>

        <div>
          <Input
            placeholder="Write a task..."
            label="New task"
            value={valueInput} // ✅ ahora sí accedes al state
            name="task"
            onChange={handleInput} // ✅ función del contexto
            error=""
          />
        </div>
      </form>
    </div>
  );
}
