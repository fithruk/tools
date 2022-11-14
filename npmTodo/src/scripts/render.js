import {
  removeTaskFromData,
  updateExsistTask,
  getApartTask,
  getData,
} from "./serverData.js";

const listElem = document.querySelector(".list");

export const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(createCheckBox(id, done), text, createRemoveBtn());
      listItemElem.addEventListener("click", listItemElemHandle);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

function createCheckBox(id, done) {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.dataset.id = id;
  checkbox.checked = done;
  checkbox.classList.add("list__item-checkbox");
  return checkbox;
}

function createRemoveBtn() {
  const btn = document.createElement("button");
  btn.classList.add("list__item-btn");
  btn.textContent = "+";
  return btn;
}

function listItemElemHandle(e) {
  if (e.target.closest(".list__item-checkbox")) {
    getApartTask(e.target.dataset.id).then((data) =>
      updateExsistTask(
        { ...data, done: (data.done = !data.done) },
        e.target.dataset.id
      ).then(() => getData().then((data) => renderTasks(data)))
    );
    getData().then((data) => renderTasks(data));
  } else if (e.target.closest(".list__item-btn")) {
    removeTaskFromData(e.target.parentNode.children[0].dataset.id).then(() =>
      getData().then((data) => renderTasks(data))
    );
  }
}
