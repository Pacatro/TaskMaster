class API {
  static async postUserData(path, data) {
    const response = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }

    const result = await response.json();

    return result.access_token;
  }

  static async getUserData() {
    const response = await fetch("http://127.0.0.1:8000/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }

    const result = await response.json();

    return result;
  }

  static async getTasks(idUser) {
    const response = await fetch(`http://localhost:8000/tasks/${idUser}`);

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }

    const tasks = await response.json();
    console.log(tasks)
    return tasks;
  }

  static async postTask(idUser) {
    const response = await fetch(`http://localhost:8000/tasks/${idUser}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }
  }

  static async updateTask(task_id, newTaskData) {
    const response = await fetch(`http://localhost:8000/tasks/${task_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newTaskData),
    })

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }
  }

  static async removeTask(task_id) {
    const response = await fetch(`http://localhost:8000/tasks/${task_id}`, {
      method: "DELETE",
    });

    console.log(response)

    if (!response.ok) {
      alert("Wrong credentials!");
      return;
    }
  }
}

export default API;
