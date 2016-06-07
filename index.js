// Array to store numeric input
var numericInput = []
// Number to store memory
var mem = null
// Variable to store curried operand function
var currySoup = null
// DOM Elements
var display = document.getElementById("display")  
var num0 = document.getElementById("zero")     
var num1 = document.getElementById("1")    
var num2 = document.getElementById("2")     
var num3 = document.getElementById("3")     
var num4 = document.getElementById("4")     
var num5 = document.getElementById("5")     
var num6 = document.getElementById("6")      
var num7 = document.getElementById("7")      
var num8 = document.getElementById("8")    
var num9 = document.getElementById("9")     
var decimal = document.getElementById("decimal")    
var allClear = document.getElementById("ac")
var clearEntry = document.getElementById("ce")    
var multiply = document.getElementById("mul")
var divide = document.getElementById("div")
var subtract = document.getElementById("sub")
var multiply = document.getElementById("mul")
var add = document.getElementById("add")
var equals = document.getElementById("eq")
// Numeric Event Handlers
num0.onclick = function() {pushNumericInput(0)}
num1.onclick = function() {pushNumericInput(1)}
num2.onclick = function() {pushNumericInput(2)}
num3.onclick = function() {pushNumericInput(3)}
num4.onclick = function() {pushNumericInput(4)}
num5.onclick = function() {pushNumericInput(5)}
num6.onclick = function() {pushNumericInput(6)}
num7.onclick = function() {pushNumericInput(7)}
num8.onclick = function() {pushNumericInput(8)}
num9.onclick = function() {pushNumericInput(9)}
decimal.onclick = function() {pushNumericInput(".")}
clearEntry.onclick = function() {clearEntryFunc()}
allClear.onclick =  function() {clearAllFunc()}
equals.onclick =  function() {equal()}
add.onclick =  function() {operate("addition")}
subtract.onclick =  function() {operate("subtraction")}
multiply.onclick =  function() {operate("multiplication")}
divide.onclick =  function() {operate("division")}
// Function for Clear All
function clearAllFunc(){
  currySoup = 0
  mem = null
  clearEntryFunc()
}
// Function for Clear Entry
function clearEntryFunc(){
  numericInput = []
  display.textContent = numericInput.join("")
}
// Function for Numeric Event Handlers
function pushNumericInput(num){
  if(numericInput.length <=11){
    // Only one decimal per number please
    if(num == "."){
      if(numericInput.length == 0){
        numericInput.push(0)
      }
      if(numericInput.indexOf(".") == -1){
      numericInput.push(".")
      }
    }
    else if(numericInput.length === 1 && num === 0 && numericInput[0] === 0){
      numericInput[0] = num
    }
    else if(numericInput.length === 1 && num !== 0 && numericInput[0] === 0){
      numericInput[0] = num
    }
    else{
      numericInput.push(num)
    }
  }
  display.textContent = numericInput.join("")
  console.log(numericInput)
}
// Function for equality
function equal (){
  console.log("you clicked equals")
  var mem = Number(numericInput.join(""))
  if(currySoup){
    currySoup(mem)
  }
  currySoup = null
  numericInput = [0]
}

// Function for Operations
function operate (operand){
  console.log("you clicked " + operand)
  if(currySoup){
     currySoup(Number(numericInput.join("")))
  }
   var num = Number(numericInput.join(""))
   console.log("currySoup closes around " + num)
   currySoup = function (number){
     console.log(operand + "currySoup called")
     switch (operand) {
        case "addition":
          var result = num + number
          break
        case "subtraction":
          var result = num - number
          break
        case "multiplication":
          var result = num * number
          break
        case "division":
          var result = num / number
          break
        default:
          console.log("Inconcievable!")
     }
     console.log("result is " + result)
     if(result !== result){
        display.textContent = "Error"
     }
     else{
       if(result.toString().length > 12){
          result = result.toPrecision(8)
       }
       numericInput = result.toString().split()
       display.textContent = numericInput.join("")
    }
  }
    numericInput = [0]
}
