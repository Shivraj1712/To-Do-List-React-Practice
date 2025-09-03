import { useRef, useState } from "react"
import { motion } from "framer-motion"
import RenderList from "./RenderList"

type Task = {
  id: number;
  description: string;
  status: boolean;
};

const ToDoList: React.FC = () => {
  const [taskId, setTaskId] = useState<number>(1);
  const [tasklist, setTaskList] = useState<Task[]>([]);
  const inputValue = useRef<HTMLInputElement | null>(null);

  const addTask = () => {
    if (!inputValue.current || inputValue.current.value.trim() === "") return;

    const newTask: Task = {
      id: taskId,
      description: inputValue.current.value,
      status: false,
    };

    setTaskList((prev) => [...prev, newTask]);
    setTaskId((prev) => prev + 1);
    inputValue.current.value = "";
  };

  const deleteTask = (id: number) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const markDown = (id: number) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: true } : task
      )
    );
  };

  return (
    <motion.section style={{minHeight:"80vh"}}
      className="container mt-4 px-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Input */}
      <div className="input-group mb-5">
        <input
          type="text"
          ref={inputValue}
          className="form-control"
          placeholder="Add Task"
          aria-label="Add Task"
        />
        <button
          className="btn btn-outline-primary"
          onClick={addTask}
          type="button"
        >
          Add
        </button>
      </div>

      {/* Rendered Tasks */}
      <div>
        {tasklist.length === 0 ? (
          <p className="text-muted">No tasks yet</p>
        ) : (
          tasklist.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <RenderList
                id={item.id}
                description={item.description}
                status={item.status}
                onDelete={deleteTask}
                onMarkDown={markDown}
              />
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default ToDoList;
