let nametask = document.getElementById("name");
let outer = document.getElementById("outer");

function getitems() {
    let tasks = JSON.parse(localStorage.getItem("Name"))
    if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
            let str = `<div class = "task" style="background-color:  ${tasks[i].color} ;" id = ${tasks[i].id}>
                <p>${tasks[i].Name}</p>
                <input type="button" value="✓" onclick="right(${tasks[i].id})">
                <input style= "margin-left:5px;"type="button" value="✗" onclick="wrong(${tasks[i].id})">
            </div>`;
            outer.insertAdjacentHTML("afterbegin", str);
        }
    } else {
        localStorage.setItem("Name", JSON.stringify([]))
    }

}
function addtask() {
    let id = Math.random();
    let str = `<div class = "task" id = "${id}">
            <p>${nametask.value}</p>
            <input type="button" value="✓" onclick="right(${id})">
            <input style= "margin-left:5px;"type="button" value="✗" onclick="wrong(${id})">
        </div>`;

    let storage = JSON.parse(localStorage.getItem("Name"));
    storage.push({ id: id, Name: nametask.value, color: "white" });
    localStorage.setItem("Name", JSON.stringify(storage))

    outer.insertAdjacentHTML("afterbegin", str);
}
function right(id) {
    let ele = document.getElementById(id);
    ele.style.backgroundColor = "#0f0"
    let tasks = JSON.parse(localStorage.getItem("Name"));
    updatedTask = tasks.filter(task => task.id == id);
    console.log(updatedTask);
    updatedTask[0].color = "#0f0";
    updatedTasks = tasks.filter(task => task.id !== id);
    updatedTasks.push(updatedTask[0]);
    localStorage.setItem("Name", JSON.stringify(updatedTasks));

}
function wrong(id) {
    let ele = document.getElementById(id);
    ele.remove();
    console.log(id);
    let tasks = JSON.parse(localStorage.getItem("Name"));
    updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("Name", JSON.stringify(updatedTasks));
}
getitems();