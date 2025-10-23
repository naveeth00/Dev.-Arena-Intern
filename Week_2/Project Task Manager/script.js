const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// To add Tasks

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark Complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
    saveTasks();

    console.log("Task added successfully!");

}


// to event click button

addBtn.addEventListener("click", addTask);


// to Enter key support

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});


// save in local storage

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
}

loadTasks();
