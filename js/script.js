
let todo = document.getElementById("input")
let tasksContainer = document.getElementById("tasks")
let addBtn = document.getElementById("addBtn")
let deleteBtn =document.getElementsByClassName('delete')
let editBtn =document.getElementsByClassName('edit')


displayElements();
// add tasks to local storage////////////////////////////////////////////
addBtn.onclick = function addTask(){
    let userTask = todo.value.trim();
    if(userTask == ''){
        alert("you must write your task!")
    }else{
    let savedData = localStorage.getItem('todo-list') ;
    if(savedData == null){
        listArr=[]
    }else{
        listArr=JSON.parse(savedData)
    }
    let item ={Task:userTask ,compeleted:false}

    listArr.push(item);
    localStorage.setItem("todo-list",JSON.stringify(listArr));
    displayElements();
    
    }
    todo.value =''; 
    
}
////create <li> to add tasks in <ul> & show AllTaskslist//////////////////////////////////
function displayElements(){
    let savedData = localStorage.getItem('todo-list') ;
    if(savedData == null){
        listArr=[]
    }else{
        listArr=JSON.parse(savedData)
    }
    let newTodoItems ="";
    listArr.forEach((element ,index) => {
    newTodoItems += `<li>${element.Task}
        <button class="delete" id="btn_controls" onclick="delete_task(${index})"><i class="fas fa-trash-alt"></i></button>
        </li>`
            
    });
    tasksContainer.innerHTML = newTodoItems;   
}
// delete tasks //////////////////////////////////////////////// 
function delete_task(index){
    let savedData = localStorage.getItem('todo-list') ;
        listArr=JSON.parse(savedData);
        listArr.splice(index ,1);
        /////after remove task ,update localstorage
        localStorage.setItem("todo-list",JSON.stringify(listArr));
        displayElements();
    }

    


    



    