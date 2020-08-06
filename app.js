const todoInput = document.getElementById("task");
const addButton = document.getElementById("button");
const todoList = document.getElementById("list");
//EVENT-Listener
addButton.addEventListener("click", function (e) {
  addTask();
  e.preventDefault();
});

//FUNCTIONS
function addTask() {
  const todoDiv = document.createElement("li");
  todoDiv.innerText = todoInput.value;
  todoList.appendChild(todoDiv);
}
