const inputVal = document.getElementsByClassName('inputVal')[0];
var addTaskBtn = document.getElementsByClassName('btn')[0];
var globalindex, globalarray
var globaltext

function addtask() {
    globaltext = inputVal
    if (inputVal.value != 0) {
        let localdatas = JSON.parse(localStorage.getItem('localdata'))
        if (localdatas === null) {
            taskList = []
        } else {
            taskList = localdatas;
        }
        console.log("add task before push:", localdatas);
        taskList.push(inputVal.value)
        localStorage.setItem('localdata', JSON.stringify(taskList));
        console.log("add task after push:", localdatas);
    }
    showItem()
    inputVal.value = ''
}

showItem()

function showItem() {
    let localdatas = JSON.parse(localStorage.getItem('localdata'))
    if (localdatas === null) {
        taskList = []

    } else {
        taskList = localdatas;
    }
    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {
        html += `<div class="todoList"><p class="pText">${data}</p><button class="deleteTask" id="delete" onClick="deleteItem(${index})">delete</button> <button class="updateTask" id="update" onClick="updateItem(${index})">Update</button></div>`
    })
    itemShow.innerHTML = html;
}

function deleteItem(index) {
    console.log("index delete here:", index)
    taskList.splice(index, 1)
    globalarray = localStorage.setItem('localdata', JSON.stringify(taskList));
    showItem()
}

function updateItem(index) {
    console.log("index update item here:", index)
    let localdatas = JSON.parse(localStorage.getItem('localdata'))
    collectiondelete = document.getElementsByClassName("deleteTask");
    for (var i = 0; i < collectiondelete.length; i++) {
        console.log("delete element ", collectiondelete[i])
        collectiondelete[i].disabled = true;
    }
    collectionupdate = document.getElementsByClassName("updateTask");
    for (var i = 0; i < collectionupdate.length; i++) {
        console.log("delete element ", collectionupdate[i])
        collectionupdate[i].disabled = true;
    }
    inputVal.value = localdatas[index]
    globalindex = index
    togglebutton()
    globalarray = localdatas
    waitforuser()
}

function waitforuser(event) {
    console.log(event);
    if (inputVal.value === "") {
        addTaskBtn.disabled = true
    }
    else {
        addTaskBtn.disabled = false
    }
}

function update() {
    console.log("index update here:", globalindex)
    valuestr = inputVal.value;
    if (valuestr.length > 1)
        globalarray[globalindex] = valuestr
    localStorage.setItem('localdata', JSON.stringify(globalarray));
    showItem()
    togglebutton()
    inputVal.value = ""
}

function togglebutton() {
    value = addTaskBtn.textContent
    if (value === 'Add Task') {
        addTaskBtn.textContent = 'Update'
        addTaskBtn.setAttribute("onClick", "update();");
    }
    if (value === 'Update') {
        addTaskBtn.textContent = 'Add Task'
        addTaskBtn.setAttribute("onClick", "addtask();");
    }
}