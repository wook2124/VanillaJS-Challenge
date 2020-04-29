const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  doneList = document.querySelector(".js-doneList");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

// Done 버튼을 누르면 Finished로 넘어갈 수 있게 해야함
function handleDone(event) {
  const done = event.target;
  const li = done.parentNode;
  toDoList.replaceChild(li);
}

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", handleDone);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    id: newId,
    text: text
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSumbit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSumbit);
}

init();


// 정답
import "./styles.css";

const pendingList = document.getElementById("js-pending"),
  finishedList = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text
  };
}

function savePendingTask(task) {
  pendingTasks.push(task);
}

function findInFinished(taskId) {
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}

function findInPending(taskId) {
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}

function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function addToFinished(task) {
  finishedTasks.push(task);
}

function addToPending(task) {
  pendingTasks.push(task);
}

function deleteTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromFinished(li.id);
  removeFromPending(li.id);
  saveState();
}

function handleFinishClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);
  saveState();
}

function handleBackClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  paintPendingTask(task);
  saveState();
}

function buildGenericLi(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  span.innerText = task.text;
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTask);
  li.append(span, deleteBtn);
  li.id = task.id;
  return li;
}

function paintPendingTask(task) {
  const genericLi = buildGenericLi(task);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", handleFinishClick);
  genericLi.append(completeBtn);
  pendingList.append(genericLi);
}

function paintFinishedTask(task) {
  const genericLi = buildGenericLi(task);
  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", handleBackClick);
  genericLi.append(backBtn);
  finishedList.append(genericLi);
}

function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() {
  pendingTasks.forEach(function(task) {
    paintPendingTask(task);
  });
  finishedTasks.forEach(function(task) {
    paintFinishedTask(task);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  input.value = "";
  paintPendingTask(taskObj);
  savePendingTask(taskObj);
  saveState();
}

function init() {
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
