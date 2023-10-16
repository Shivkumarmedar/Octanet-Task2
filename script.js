// let todoValue=document.getElementById("todoText");
// listItems=document.getElementById("list-items")
// addUpdateClick= document.getElementById("AddUpdateClick")

// function todoData(){
//     // alert(todoValue.value)
//     if(todoValue.value === ""){
//         alert('Task cannot be empty')
//         todoValue.focus()
//     }

//     let li=document.createElement('li')
//     let todoItems=`<div>${todoValue.value}</div>`
//     li.innerHTML=todoItems;
//     listItems.appendChild(li);
//     todoValue.value="";
// }


let inputs = document.getElementById("todoText");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}