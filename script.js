function toggletheme(val){
   if (val.id === "blue") {
      document.querySelector("body").className = "theme1";
   }
  if (val.id === "gray") {
   document.querySelector("body").className = "theme2";
  }
  if (val.id === "violet") {
   document.querySelector("body").className = "theme3";
  }
}
 
function disply(val){
   document.getElementById("result").innerHTML += val;
}

function resetdisply(){
   document.getElementById("result").innerHTML = "";
}

function cleare(){
    var val = document.getElementById("result").innerText;
    if(val.length>0){
        val= val.substring(0,val.length-1);
        document.getElementById("result").innerHTML = val;
     }
}

function calculate(){
  var x =  document.getElementById("result").innerText;
  var y = eval(x);
   
  document.getElementById("result").innerText = y;
}