import ContentTask from "../Context/ToDoList/Tasks/ContentTask/ContentTask";
import FooderTask from "../Context/ToDoList/Tasks/FooderTasks/FooderTask";
import ActionPanel from "../Layout/ActionPanel";

export default function Tasks() {
  return (
    <div>
      <ActionPanel
        contentActionPanel={<ContentTask />}
        BottonSection={<FooderTask />}
      />
    </div>
  );
}
