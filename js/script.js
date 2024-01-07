const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const error = document.querySelector(".error")

function addTask() {
    if (inputBox.value === "") {
        inputBox.placeholder = ""
        error.style.display = "block"
        setTimeout(reset, 3000)
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}
function reset() {
    error.style.display = "none"
    inputBox.placeholder = "Add your text"
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

inputBox.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        addTask()
    }
})
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()