const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const todos = JSON.parse(localStorage.getItem("todos"))

if(todos){
    todos.forEach(todo=>{
        addToDo(todo)  
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addToDo()
})

function addToDo(todo){
    let todoText = input.value
   // console.log(value)
   if(todo){
    todoText = todo.text
    console.log(todoText)
   }
   
if(todoText){
        const li = document.createElement("li");
        if(todo && todo.completed){
            li.classList.add('completed')
        }
        li.innerText = todoText;

        li.addEventListener('click',()=>{
            li.classList.toggle('completed')
            updateLs()
        })

        li.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            li.remove();
            updateLs()
            //contextmenu ==> WHEN IT TRIGGER RIGHT CLICK
        })
        todosUL.appendChild(li)
        input.value = ''
        updateLs()
    }
   }

function updateLs(){
    const todosEl = document.querySelectorAll('li')
    const todos =[];

    todosEl.forEach(todoEl=>{
        todos.push({
            text: todoEl.innerText,
            completed : todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}