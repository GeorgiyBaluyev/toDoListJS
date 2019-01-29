(()=>{
    'use strict';

let btn = document.querySelector('#add');
let input = document.querySelector('.input');
let taskField = document.querySelector('#tasks');
let task = document.createElement('div');
let taskText = document.createElement('div');
let btns = document.createElement('div');
let description = document.querySelector('#description');
let done = document.querySelector('#done');
let cancelBtn = document.createElement('button');
let confirmBtn = document.createElement('button');
let taskList = [];
let doneTasks = [];


function raf(fn){
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            fn();
        })
    })
}
confirmBtn.className = 'confirm';
taskText.className = 'taskText';
btns.className = 'btns';
cancelBtn.className = 'cancel';
task.className = 'newTask';




if (!input.value) {
    btn.disabled = true;
}
input.addEventListener('keyup', () => {
    btn.disabled = !input.value;
});



btn.addEventListener('click', addNewTask);

function addNewTask() {
    let newBtns = btns.cloneNode(true);
    let newTaskText = taskText.cloneNode(true);
    let newTask = task.cloneNode(true);
    let newBtn = cancelBtn.cloneNode(true);
    let newConfirmBtn = confirmBtn.cloneNode(true);
    taskField.appendChild(newTask);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newBtns);
    newTaskText.textContent = input.value;
    newBtns.appendChild(newBtn);
    newBtns.appendChild(newConfirmBtn);
    input.value = '';
    btn.disabled = true;
    taskList.push('+');
    if(taskList.length === 1){
        description.innerHTML = `You have 1 task`;}
    if(taskList.length > 1){
        description.innerHTML = `You have ${taskList.length} tasks`
    }
    newBtn.addEventListener('click', function () {
        taskList.pop();
        if(taskList.length === 1){
            description.innerHTML = `You have 1 task`;}
        if(taskList.length < 1){
            description.innerHTML = `You don't have any tasks yet`;
        }
        if(taskList.length > 1){
            description.innerHTML = `You have ${taskList.length} tasks`
        }
        let handlerClose=function(){
            newTask.style.display = 'none';
            newTask.classList.remove('close-class');
            newTask.removeEventListener('transitionend', handlerClose);
        };
        newTask.classList.add('close-class');
        newTask.addEventListener('transitionend', handlerClose);
    });
    newConfirmBtn.addEventListener('click', function () {
        newTask.style.backgroundColor = 'green';
        taskList.pop();
        doneTasks.push('+');
        if(taskList.length === 1){
            description.innerHTML = `You have 1 task`;}
        if(taskList.length < 1){
            description.innerHTML = `You don't have any tasks yet`;
        }
        if(taskList.length > 1){
            description.innerHTML = `You have ${taskList.length} tasks`
        }
        if(doneTasks.length === 1){
            done.innerHTML = `You've done 1 task`;
        }
        if(doneTasks.length > 1){
            done.innerHTML = `You've done ${doneTasks.length} tasks`;
        }
        if(doneTasks.length < 1){
            done.style.display = 'none';
        }
    });
    let handlerOpen=function(){
        newTask.classList.remove('open-class');
        newTask.removeEventListener('transitionend', handlerOpen);
    };
    newTask.style.display = 'flex';
    newTask.classList.add('class-container');
    raf(function () {
        newTask.classList.add('open-class');
        newTask.classList.remove('class-container');
    });
    newTask.addEventListener('transitionend', handlerOpen);
}
})();

