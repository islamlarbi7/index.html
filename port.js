document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");


  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
      if (index % 2 === 1) taskItem.classList.add("alternate");
      if (task.completed) taskItem.classList.add("completed");

      const taskName = document.createElement("span");
      taskName.textContent = task.name;

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.classList.add("complete");
      completeButton.onclick = () => toggleComplete(index);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("edit");
      editButton.onclick = () => editTask(index);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete");
      deleteButton.onclick = () => deleteTask(index);

      taskItem.appendChild(taskName);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName) {
      tasks.push({ name: taskName, completed: false });
      taskInput.value = "";
      renderTasks();
    }
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  function editTask(index) {
    const newTaskName = prompt("Edit task name:", tasks[index].name);
    if (newTaskName) {
      tasks[index].name = newTaskName;
      renderTasks();
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  addTaskButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });

  renderTasks();
});
