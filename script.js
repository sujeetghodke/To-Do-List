
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add button's addTask function 
function addTask(){
    if(inputBox.value === ''){
        alert("You must writer something to add !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

//checked, unchecked list and delete list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

//saveDate function is used to save data after refreshing the page.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//showTask function is used to save data after closing the browser.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()