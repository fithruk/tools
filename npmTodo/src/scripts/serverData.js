const apiUrl = "https://636b6df9ad62451f9fb14be5.mockapi.io/tasks";

export const createNewTask = async (newTask) => {
  return await fetch(`${apiUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
};

export const getData = async () => {
  return await fetch(apiUrl).then((data) => data.json());
};

export const getApartTask = async (id) => {
  return await fetch(`${apiUrl}/${id}`).then((data) => data.json());
};

export const updateExsistTask = async (updatedTask, id) => {
  return await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
};

export const removeTaskFromData = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};
