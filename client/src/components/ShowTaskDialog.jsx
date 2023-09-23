import { Dialog, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";
import API from "../api/api";

function ShowTaskDialog({ isOpen, setIsOpen, task_id }) {
  const [task, setTask] = useState({});

  const fetchTask = async () => {
    const taskData = await API.getTask(task_id);
    setTask(taskData);
  };

  useEffect(() => {
    fetchTask();
  }, [!task]);

  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen} className="task-dialog">
      <div className="task-container">
        <div className="task-title">{task.title}</div>
        <div className="task-description">{task.description}</div>
      </div>
    </Dialog>
  );
}

export default ShowTaskDialog;
