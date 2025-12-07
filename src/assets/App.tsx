import { useReducer, useState, type ChangeEvent } from "react";

// ---------------- Types ----------------

interface Task {
  id: number;
  title: string;
}

type Action =
  | { type: "add"; title: string }
  | { type: "delete"; id: number };

// ---------------- Reducer ----------------

const initialState: Task[] = [];

function reducer(state: Task[], action: Action): Task[] {
  if (action.type === "add") {
    return [
      ...state,
      { id: Date.now(), title: action.title }
    ];
  }

  if (action.type === "delete") {
    return state.filter(task => task.id !== action.id);
  }

  return state;
}

// ---------------- Component ----------------

export default function TodoList() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({ type: "add", title: input });
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de tareas (useReducer + TS)</h2>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={handleInput}
          placeholder="Nueva tarea..."
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <ul style={{ marginTop: 20 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 250,
              marginBottom: 8
            }}
          >
            {task.title}

            <button
              onClick={() =>
                dispatch({ type: "delete", id: task.id })
              }
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
