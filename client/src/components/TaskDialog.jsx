import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import API from "../api/api";

function TaskDialog({ isOpen, setIsOpen, task_id }) {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updateTask(task_id, newTask);
    window.location.reload();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Edit Task
          </Dialog.Title>
          <form className="task-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              required
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              name="description"
              placeholder="Description"
              required
              cols="25"
              rows="25"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            ></textarea>
            <button>Add</button>
          </form>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default TaskDialog;
