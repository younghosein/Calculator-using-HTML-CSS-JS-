const buttons = document.querySelectorAll("#btn button");
var monitor = document.querySelector("#txtInput span");
buttons.forEach(element => {
  element.addEventListener("click", function (){
    if (element.innerHTML == "="){
      monitor.innerHTML = eval(monitor.innerHTML)
    }else if (element.innerHTML == "C"){
      monitor.innerHTML = "";
    }else if (element.innerHTML == "E"){
      document.querySelector("#cal").remove()
    }else {
      monitor.innerHTML += element.innerHTML
    }
  });
});