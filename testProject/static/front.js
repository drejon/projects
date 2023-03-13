
let button = document.getElementById('genTask');
button.addEventListener('click', genTask);
let idValue = 0;

let tasks = [];

function genTask() {
    let taskName = document.getElementById('taskName').value;
    let taskList = document.getElementById('taskList');
    let task = document.createElement('div');
    let name = document.createElement('h2');
    let addTask = document.createElement('button');

    addTask.innerHTML = `Create Item`;
    addTask.addEventListener('click', genItem);
    name.innerHTML = `${taskName}`;
    task.appendChild(name);
    task.className = 'task';
    task.appendChild(addTask)
    task.setAttribute('id', idValue)
    taskList.appendChild(task);
    
    let taskSelf = document.getElementById(idValue)

    input = document.createElement('input')
    button = document.createElement('button')
    button.innerHTML = 'Delete'
    taskSelf.appendChild(input)
    taskSelf.appendChild(button)
    idValue++
    tasks.push(task)
}

function genItem() {
    for (let task of tasks) {
        console.log(task.getAttribute('id'))
    }
}