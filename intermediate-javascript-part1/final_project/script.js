window.onload = function (){
// localStorage.clear()

  let tBody = document.querySelector("tbody");
  let todoArray = JSON.parse(localStorage.getItem("todoList")) || [];
  let addButton = document.getElementById("todo_button")

  if(todoArray[0]){
    for(let i = 0; i < todoArray.length; i++){
        let savedTr = document.createElement("tr");
        savedTr.innerHTML = "<td>"+todoArray[i]+"</td>"
        tBody.appendChild(savedTr)
    }
  }

  //add todo
  addButton.addEventListener("click", function(){
    let newTodos = document.getElementById("new_todo");
    let newTr = document.createElement("tr");
    if(newTodos.value && todoArray.indexOf(newTodos.value) === -1){
      newTr.innerHTML = '<td>'+ newTodos.value;
      tBody.insertBefore(newTr, tBody.childNodes[0]);
      todoArray.unshift(newTodos.value)
    }
  })

  //Remove row
  tBody.addEventListener("dblclick", function(event){
    let removeRow = event.target.parentElement;
    todoArray.splice(todoArray.indexOf(event.target.innerText),1)
    tBody.removeChild(removeRow)

  })

  window.onbeforeunload = function () {
    if(todoArray[0]){
      localStorage.setItem("todoList", JSON.stringify(todoArray)) 
    } else {
      localStorage.clear();
    }
  };

}