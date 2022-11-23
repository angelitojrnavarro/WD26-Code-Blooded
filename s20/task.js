let button = document.querySelector("#button");
let todoWrapper = document.querySelector(".todo-wrapper")

button.addEventListener("click",() =>{

let userInput = document.querySelector("#userInput").value;

if (userInput.length > 5)
{
    let li = document.createElement("li");
    li.className="todo";

    let node = document.createTextNode(userInput);
    li.appendChild(node);
    todoWrapper.appendChild(li);
    document.querySelector("#userInput").value="";
}

else
{
    alert("You must enter more than 5 characters");
}
});

let button2 = document.querySelector("#button2").addEventListener("click", (e) =>{
    if(e.target.className === "todo"){
        let msg = confirm(`Are you sure you want to delete \n ${e.target.innerText}`);
    
        if (msg == true){
            document.querySelector(".todo-wrapper").removeChild(e.target);
        }
    }
});