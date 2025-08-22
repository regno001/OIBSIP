const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
function AddTask(){
  if(inputBox.value == ''){
    alert("You must fill the information")
  }else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();
}
listContainer.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
    e.target.classList.toggel("checked");
    saveData();
  }
  else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }

},false);
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}