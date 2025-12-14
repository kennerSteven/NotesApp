import GeneralButton from "../../../../Ui/GeneralButton/GeneralButton";
import { useContext } from "react";
import { showModalContext } from "../CreateTask/ShowModal";
import CreateTask from "../CreateTask/CreateTask";

export default function FooderTask() {
  const modalContext = useContext(showModalContext);

  if (modalContext === null) {
    throw new Error("Error");
  }

  const { showModalTask, setShowModalTask } = modalContext;

  return (
    <div>
      <div className="d-flex align-items-center gap-3 m-2 ">
        <div>
          <GeneralButton
            colorMode={false}
            labelButton="Add Task"
            onClick={() => setShowModalTask(true)}
          />
        </div>

        {showModalTask && (
          <div>
            <CreateTask />
          </div>
        )}
      </div>
    </div>
  );
}
