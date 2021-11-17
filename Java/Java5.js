

function buttonClicked()
{
 let num1 = document.getElementById("number1").value;
 let num2 = document.getElementById("number2").value;

 numberR = (parseFloat(num2) - parseFloat(num1)) + parseFloat(num1)
 let result = Math.round(Math.random() * (parseFloat(num2) - parseFloat(num1)) + parseFloat(num1));

 document.getElementById("numberresult").innerHTML = "Result = " +result;  
 console.log(numberR)
}