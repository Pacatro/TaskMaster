import { useState } from "react";
import API from "../api/api";

function TaskForm({ userId }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.postTask(userId, task);
    window.location.reload()
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        required
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        name="description"
        placeholder="Description"
        required
        cols="25"
        rows="25"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      ></textarea>
      <button>Add</button>
    </form>
  );
}

export default TaskForm;
