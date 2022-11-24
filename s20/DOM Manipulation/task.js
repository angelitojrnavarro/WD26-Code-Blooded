
let addButton = document.querySelector("#btnAdd"); //add button


addButton.addEventListener("click", () =>{
   let  userInput = document.querySelector("#userInput").value;
   let todo = document.querySelector("#todo"); //ul

   let li = document.createElement("li"); //li
   li.textContent = userInput.value;

   let checkbox = document.createElement('input'); //check box
   checkbox.type = "checkbox";
   checkbox.value = 1;
   checkbox.name = "name";

   li.appendChild(checkbox);

   
   let node = document.createTextNode(userInput);
   li.appendChild(node);
   todo.appendChild(li);
   document.querySelector("#userInput").value="";
});


let delButton = document.querySelector("#btnDel"); //delete button
delButton.addEventListener("click", () =>{
    
        let del = [].slice.call(document.querySelectorAll("#todo li"));   
                del.filter((e) => e.firstChild.checked).forEach((e) => e.remove() );
      });
