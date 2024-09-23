// create task from cokie
const taskList = document.getElementById("ft_list");
createTaskElement();

function getRandomInt() {
  return Math.floor(Math.random() * 9000 + 1000);
}

function getAllTaskArray() {
  const taskObjArray = document.cookie.split("; ").map((task) => {
    return { id: task.slice(0, 4), name: task.slice(5) };
  });
  return taskObjArray;
}

function createTaskElement() {
  if (getAllTaskArray().length != 0) {
    getAllTaskArray().forEach((task) => {
      if (task.name != "null" && task.name != "") {
        const taskEl = document.createElement("div");
        taskEl.className = "task-card";
        taskEl.id = task.id;
        taskEl.innerHTML = task.name;
        taskEl.onclick = function () {
          if (confirm("delete task") == true) {
            console.log(this.id);
            deleteCookie(this.id);
            location.reload();
          }
        };
        taskList.appendChild(taskEl);
      }
    });
  } else {
    console.log("no task");
  }
}

function deleteCookie(ID) {
  document.cookie = `${ID}=null`;
}

function deleteTask(obj) {
  console.log(obj);
}
function addToDo() {
  let todoText = prompt("TASK NAME");
  if (todoText != null) {
    document.cookie = `${getRandomInt()}=${todoText}`;
    location.reload();
  }
}
