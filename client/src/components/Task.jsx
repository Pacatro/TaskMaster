import { useState } from "react";
import API from "../api/api";
import TaskEditDialog from "./TaskEditDialog";
import ShowTaskDialog from "./ShowTaskDialog";

function Task({ title, id }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);

  return (
    <div className="task" onClick={() => setIsTaskOpen(true)}>
      <h3>{title}</h3>
      <div className="buttons">
        <button className="edit-button" onClick={() => setIsEditOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button
          className="check-button"
          onClick={() => {
            API.removeTask(id);
            window.location.reload();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </button>
      </div>
      <TaskEditDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} task_id={id} />
      <ShowTaskDialog isOpen={isTaskOpen} setIsOpen={setIsTaskOpen} task_id={id} />
    </div>
  );
}

export default Task;
