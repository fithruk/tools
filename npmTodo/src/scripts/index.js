import { renderTasks } from './render.js';
import { getData, createNewTask } from './serverData.js';
import { createNewTaskObj } from './createNewTask.js';

const input = document.querySelector('.task-input');
const createNewTaskBtn = document.querySelector('.create-task-btn');

window.addEventListener('DOMContentLoaded', (e) => {
  getData().then((data) => renderTasks(data));

  const createNewTaskBtnHandler = () => {
    if (input.value === '') return;
    createNewTask(createNewTaskObj(input.value)).then(() => getData().then((data) => renderTasks(data)));
    input.value = '';
  };

  createNewTaskBtn.addEventListener('click', createNewTaskBtnHandler);
});
