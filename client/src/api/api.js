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
}

export default API;
