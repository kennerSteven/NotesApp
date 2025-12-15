import ContentTask from "../Context/ToDoList/Tasks/ContentTask/ContentTask";
import FooderTask from "../Context/ToDoList/Tasks/FooderTasks/FooderTask";
import ActionPanel from "../Layout/ActionPanel";
import { useLoadingContext } from "../Context/Loading/UseLoading";
import Loading from "../Context/Loading/Loading";

export default function Tasks() {
  const { isLoading } = useLoadingContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ActionPanel
      contentActionPanel={<ContentTask />}
      BottonSection={<FooderTask />}
    />
  );
}
