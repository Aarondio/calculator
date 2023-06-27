const calForm = document.getElementsByName("calform"); //Targetting the from
const screen = document.getElementById("screen"); //Targetting the screen using Id
const display = document.getElementsByName("screen"); //Targetting the screen using name
let msg = document.getElementById("msg"); //Targetting the message
let power = "Off"
//Prevent form from being submitted
document.getElementById("form").addEventListener("click", function (e) {
  e.preventDefault(); //Prevent the form from being submitted by default
});

function number(number) {
  screen.value += number; //Assing number to the calulor screen
}

function erase() {
  screen.value = ""; //reset the value on the screen
}

function cal() {
  var num1 = screen.value;
  var num2 = parseFloat(eval(num1)); //ParseFloat will make sure that we return decimal numbers
  parseFloat((screen.value = num2)); //convert answer to decimal number
}

function square(){
  var num1 = screen.value;
  var num2 =  Math.sqrt(parseFloat(eval(num1))); //ParseFloat will make sure that we return decimal numbers
  parseFloat((screen.value = num2)); //convert answer to decimal number
}

function back() {
  var ev = screen.value;
  ev = ev.slice(0, -1);
}

window.onload = function () {

    screen.style = "color:#D2DCBB"
    document.getElementById("msg").innerHTML = "Calculator is OFF"
    document.getElementById("state").innerHTML = "OFF"
};


function onOff(){

   if(power=="Off"){
      screen.style = "color:#000"
      power = "On"
      screen.value = ""
      document.getElementById("msg").innerHTML = "Calculator is ON"
      document.getElementById("state").innerHTML = "ON"
   }else{
     screen.style = "color:#D2DCBB"
     power = "Off"
     screen.value = ""
     document.getElementById("msg").innerHTML = "Calculator is OFF"
     document.getElementById("state").innerHTML = "OFF"
   }
}
