// DOM Elements
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks.forEach((task, actualIndex) => {
    if (filter === "completed" && !task.completed) return;
    if (filter === "pending" && task.completed) return;

    const li = document.createElement("li");
    li.className = "task-item";
    li.draggable = true;
    li.setAttribute("data-index", actualIndex); // Store actual index

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskStatus(actualIndex));

    const taskText = document.createElement("span");
    taskText.textContent = task.name;
    if (task.completed) taskText.classList.add("completed");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(actualIndex)); // Use actual index

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(actualIndex));

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Drag-and-drop handlers
    li.addEventListener("dragstart", () => onDragStart(actualIndex));
    li.addEventListener("dragover", (e) => e.preventDefault()); // Allow dropping
    li.addEventListener("drop", () => onDrop(actualIndex));
    li.addEventListener("dragend", onDragEnd);

    taskList.appendChild(li);
  });
}


// Add a new task
function addTask() {
  const taskName = newTaskInput.value.trim();
  if (taskName === "") return;

  tasks.push({ name: taskName, completed: false });
  newTaskInput.value = "";
  saveTasks();
  renderTasks();
}

// Toggle task completion status
function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Edit a task
function editTask(index) {
  const taskToEdit = tasks[index];

  if (!taskToEdit) return; // Ensure the task exists

  const newName = prompt("Edit task name:", taskToEdit.name);
  if (newName !== null && newName.trim() !== "") {
    taskToEdit.name = newName.trim();
    saveTasks();
    renderTasks(); // Ensure the UI updates correctly
  }
}



// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

let draggedIndex = null;

function onDragStart(index) {
  draggedIndex = index;
  const draggedElement = document.querySelector(`.task-item[data-index="${index}"]`);
  draggedElement.classList.add("dragging");
}

function onDragOver(event) {
  event.preventDefault(); // Allows the drop event to happen
}

function onDrop(targetIndex) {
  if (draggedIndex === null || draggedIndex === targetIndex) return;

  // Swap positions in the tasks array
  const temp = tasks[draggedIndex];
  tasks[draggedIndex] = tasks[targetIndex];
  tasks[targetIndex] = temp;

  saveTasks();
  renderTasks(); // Refresh UI

  draggedIndex = null; // Reset dragged index
}

function onDragEnd() {
  const draggingElement = document.querySelector(".dragging");
  if (draggingElement) draggingElement.classList.remove("dragging");
}


// Filter tasks
filterButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderTasks(btn.dataset.filter);
  })
);

// Initialize app
addTaskBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});
renderTasks();
