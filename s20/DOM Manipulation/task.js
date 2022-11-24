let addButton = document.querySelector("#btnAdd"); //add button

addButton.addEventListener("click", () =>{
   let  userInput = document.querySelector("#userInput").value;
   let todo = document.querySelector("#todo"); //ul

   let li = document.createElement("li"); //li
   li.textContent = userInput.value;

   let checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   checkbox.value = 1;
   checkbox.name = "name";
   checkbox.className = "checked-box"

   li.appendChild(checkbox);

   
   let node = document.createTextNode(userInput);
   li.appendChild(node);
   todo.appendChild(li);
   document.querySelector("#userInput").value="";
});


let delButton = document.querySelector("#btnDel");
delButton.addEventListener("click", () =>{
    
        let del = [].slice.call(document.querySelectorAll("#todo li"));   
                del.filter(function(e) {
               return e.firstChild.checked
                }).forEach(function(e) {
             e.remove();
          })
      })
