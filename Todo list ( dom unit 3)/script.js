const inputText = document.querySelector('#new-task');
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector('#task-list'); 
const filterBtns = document.querySelectorAll('.filter-btn');
const taskCounter = document.querySelector('#tasks-counter');
const clearAllTasksBtn = document.querySelector('#clear-completed');
const markAllTasksBtn = document.querySelector('#mark-all-completed');
let currentState = 'all';

let tasks = JSON.parse(localStorage.getItem('task')) || [];

//mark All tasks as read

const markAllTasksAsRead = ()=>{
    if(confirm('Are You Sure To Mark All As Completed ?')){
        tasks.forEach((ele)=>{
            ele.completed = true;
            return ele;
        });
        saveTask(tasks);
        updateTaskCount();
        showTasks();
    }else{
        return;
    }

}

//clear all tasks

const clearAllTasks = ()=>{
    if(confirm("Are You Sure To Delete All Tasks ?")){
        console.log(tasks)
        tasks = [];
        saveTask(tasks);
        updateTaskCount();
        showTasks();
    }else{
        return;
    }
}


// fucn to update func count 

const updateTaskCount = ()=>{
    // console.log('counted updated !!')
    let activeTasks = tasks.filter((task)=>task.completed == false);
    taskCounter.textContent = `${activeTasks.length} items left`
}


//func  to toggle tasks

const toggleTask = (taskId)=>{
    let task = tasks.find((task)=>taskId == task.id);
    task.completed = task.completed?false:true;
    saveTask(tasks);
    showTasks();
}

// func to delete task

const deleteTask = (taskId)=>{
    console.log('delete btn clicked');
    let updateTasks = tasks.filter((task)=>taskId != task.id);
    tasks = updateTasks;
    saveTask(tasks)
    showTasks();
}

//func to store task in local storage

const saveTask = (tasks)=>{
    localStorage.setItem('task',JSON.stringify(tasks));
    console.log(tasks,'saved in local storage!');
}


// func to add task

const addTask = ()=>{
    if(inputText.value == '')return alert('Task cannot be empty!!');

    let task ={
        id:Math.floor(Math.random()*9000+1000),
        text:inputText.value,
        completed:false
    }

    tasks.push(task);    
    saveTask(tasks);
    showTasks();
    inputText.value = '';

}


//func to show active tasks

const showActiveTasks = ()=>{
    let activeTasks = tasks.filter((task)=>task.completed==false);

    filterBtns[0].classList.remove('active');

    if(filterBtns[2].classList.contains('active')){
        filterBtns[2].classList.remove('active');
    }

    filterBtns[1].classList.add('active');
    // tasks = activeTasks;
    currentState='active';
    showTasks(activeTasks);
}

// func to show all completed tasks

const showCompletedTasks = ()=>{
      if(filterBtns[0].classList.contains('active') || filterBtns[1].classList.contains('active') ){
        filterBtns[0].classList.remove('active');
        filterBtns[1].classList.remove('active');
    }
    filterBtns[2].classList.add('active');
    let activeTasks = tasks.filter((task)=>task.completed==true);
    currentState='completed';
        showTasks(activeTasks);
}

// func to show tasks

const showTasks = (filteredTasks = tasks)=>{

    if(filteredTasks.length == 0){
        if(currentState ==='active' || currentState === 'completed'){
            console.log(currentState);
            taskList.innerHTML=``;

            return;
        }
        taskList.innerHTML = '<li>Your to-do list is empty</li>';
        return;
    }

    taskList.innerHTML=``;

    filteredTasks.forEach((task)=>{
        let li = document.createElement('li');

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = task.completed;
        checkBox.addEventListener('change',()=>{toggleTask(task.id)} );

        let span = document.createElement('span');
        span.textContent = task.text;

        if(task.completed){
            span.classList.add('completed');
        }

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
        deleteBtn.addEventListener('click',()=>{deleteTask(task.id)});

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });
    updateTaskCount();


}

filterBtns[0].addEventListener('click',()=>{
     if(filterBtns[1].classList.contains('active') || filterBtns[2].classList.contains('active') ){
        filterBtns[2].classList.remove('active');
        filterBtns[1].classList.remove('active');
    }
    filterBtns[0].classList.add('active');
    currentState='all';
    showTasks(tasks);
});

filterBtns[1].addEventListener('click',()=>{showActiveTasks()});
filterBtns[2].addEventListener('click',()=>{showCompletedTasks()});

addTaskBtn.addEventListener('click',()=>addTask());
clearAllTasksBtn.addEventListener('click',()=>clearAllTasks());
markAllTasksBtn.addEventListener('click',()=>markAllTasksAsRead());

inputText.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        addTask();
        return;
    }
});

showTasks();

