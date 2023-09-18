import { useState, Fragment } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import API from "../api/api";

function TaskEditDialog({ isOpen, setIsOpen, task_id }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updateTask(task_id, task);
    window.location.reload();
  };

  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
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
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </Dialog>
  );
}

export default TaskEditDialog;
