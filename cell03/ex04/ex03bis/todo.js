createTaskElement();

function getRandomInt() {
    return Math.floor(Math.random() * 8000 + 1000);
}

function getAllTaskArray() {
    const tempArray = document.cookie.split(" ");
    let taskArray = [];
    taskArray.push(tempArray.pop());
    tempArray.reverse().forEach((task) => {
        taskArray.unshift(task.slice(0, -1));
    });

    const taskObjArray = taskArray.map((task) => {
        return {
            id: task.slice(0, 4),
            name: decodeURIComponent(task.slice(5)),
        };
    });

    return taskObjArray;
}

function createTaskElement() {
    if (getAllTaskArray().length != 0) {
        getAllTaskArray().forEach((task) => {
            if (task.name != "null" && task.name != "") {
                const taskEl = document.createElement("div");
                taskEl.id = task.id;
                $(taskEl)
                    .addClass("task-card")
                    .text(task.name)
                    .click(() => {
                        if (confirm("delete task") == true) {
                            deleteCookie(task.id);
                            location.reload();
                        }
                    })
                    .appendTo($("#ft_list"));
            }
        });
    } else {
        console.log("no task");
    }
}

function deleteCookie(ID) {
    document.cookie = `${ID}=; Max-Age=-1;`;
}

$("#new-btn").click(() => {
    let todoText = prompt("TASK NAME");
    if (todoText != null) {
        document.cookie = `${getRandomInt()}=${encodeURIComponent(todoText)}`;
        location.reload();
    }
});
