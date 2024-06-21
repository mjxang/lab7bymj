document.addEventListener("DOMContentLoaded"),
  () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    const addTask = () => {
      const taskText = taskInput.ariaValueMax.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
      const taskItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";

      checkbox.addEventListener("change", (e) => {
        e.target.parentElement.classList.toggle("Completed!");
      });
      const taskContent = document.createTextNode(taskText);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);
      taskInput.value = "";
    };

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  };
