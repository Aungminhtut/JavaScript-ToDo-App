// console.log("Hello Control");

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (inputBox.value === "") {
        alert("Enter your todo list");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\uood7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
