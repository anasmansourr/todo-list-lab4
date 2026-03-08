class Task {

constructor(text){

this.text = text;
this.completed = false;

}

}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(){

let input = document.getElementById("taskInput");
let text = input.value;

if(text === "") return;

let task = new Task(text);

tasks.push(task);

saveTasks();

displayTasks();

input.value = "";

}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks(){

let list = document.getElementById("taskList");

list.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

li.innerText = task.text;

if(task.completed){

li.classList.add("completed");

}

li.onclick = function(){

task.completed = !task.completed;

saveTasks();

displayTasks();

};

let deleteBtn = document.createElement("button");

deleteBtn.innerText = "Delete";

deleteBtn.className = "delete-btn";

deleteBtn.onclick = function(e){

e.stopPropagation();

tasks.splice(index,1);

saveTasks();

displayTasks();

};

li.appendChild(deleteBtn);

list.appendChild(li);

});

}

// Load tasks on page load
displayTasks();