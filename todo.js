 const inputbox=document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

funtion addTask(){
   if(inputBox.value === ''){
      alert("you must write something!");
   }
   else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendchild(li);
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
   }
   inputBox.value = "";
}