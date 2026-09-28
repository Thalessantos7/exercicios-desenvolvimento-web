let tasks = []

// Obtem referencias aos elementos da página

const taskDescriptionInput = document.getElementById("task-description")
const taskButton = document.getElementById("task-button")
const taskList = document.getElementById("task-list")

// Registrar eventos

taskButton.addEventListener("click", addTask)

function addTask(){
    const description = taskDescriptionInput.value

    const newTask = {
        description,
        checked: false
    }

    tasks.push(newTask)

    taskDescriptionInput.value = ""

    renderList()
}

function renderList(){
    taskList.textContent = ""

    tasks.forEach(task => {
        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.checked

        checkbox.addEventListener("change", function(){
            task.checked = checkbox.checked

            if (task.checked){
                text.classList.add("completed")
            }
            else{
                text.classList.remove("completed")
            }
        })

        li.appendChild(checkbox)

        const text = document.createElement("span")
        text.textContent = task.description

        if (task.checked){
            text.classList.add("completed")
        }
  
        li.appendChild(text)

        const button = document.createElement("button")
        button.textContent = "Remover"
        button.addEventListener("click", function(){
            tasks = tasks.filter(t => t != task)
            renderList()
        })

        li.appendChild(button)

        taskList.appendChild(li)
    })
}
