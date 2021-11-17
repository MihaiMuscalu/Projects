function buttonClicked()
{

    let num1 =document.getElementById("number1").value;
    let num2 =document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("numberresult").innerHTML = "Result = " + result;
}
    function buttonClicked1()
{
    let num3 =document.getElementById("number3").value;
    let num4 =document.getElementById("number4").value;

    let result1 = parseFloat(num3) - parseFloat(num4);
    document.getElementById("numberresult1").innerHTML = "Result = " + result1;
}
function buttonClicked2()
{
    let num5 =document.getElementById("number5").value;
    let num6 =document.getElementById("number6").value;

    let result2 = parseFloat(num5) * parseFloat(num6);
    document.getElementById("numberresult2").innerHTML = "Result = " + result2;
}
function buttonClicked3()
{
    let num7 =document.getElementById("number7").value;
    let num8 =document.getElementById("number8").value;

    let result3 = parseFloat(num7) / parseFloat(num8);
    document.getElementById("numberresult3").innerHTML = "Result = " + result3;
}