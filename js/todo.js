document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".inputEle");
  const toDoList = document.querySelector(".todolist");
  const todoForm = document.querySelector(".todoforms");

  todoForm.addEventListener("submit", addTodo);

  let todoArray = [];
  let TODO_KEY = "todos";

  function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
  }

  function addTodo(event) {
    event.preventDefault();
    const todo = input.value;
    input.value = "";
    const newTodo = {
      text: todo,
      id: Date.now(),
    };
    todoArray.push(newTodo);
    paintToDo(newTodo);
    saveToDo();
  }

  function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerHTML = newToDo.text;
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteToDo);
    btn.innerHTML = "💣";
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
  }

  function deleteToDo(toDo) {
    const li = toDo.target.parentNode;
    todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveToDo();
  }

  const saveTodo = localStorage.getItem(TODO_KEY);
  if (saveTodo !== null) {
    const parseTodo = JSON.parse(saveTodo);
    todoArray = parseTodo;
    parseTodo.forEach(paintToDo);
  }

  // end
});
