function Addition() {
    let X = document.getElementById("firstValue").value;
    let Y = document.getElementById("secondValue").value;

    let Result = (X*1 + Y*1);

    document.getElementById("Result").innerHTML = "Result is: " + Result;  
}

function Subtraction() {
    let X = document.getElementById("firstValue").value;
    let Y = document.getElementById("secondValue").value;

    let Result = (X - Y);

    document.getElementById("Result").innerHTML = "Result is: " + Result;  
}

function Multiplication() {
    let X = document.getElementById("firstValue").value;
    let Y = document.getElementById("secondValue").value;

    let Result = (X * Y);

    document.getElementById("Result").innerHTML = "Result is: " + Result;  
}

function Division() {
    let X = document.getElementById("firstValue").value;
    let Y = document.getElementById("secondValue").value;

    let Result = (X / Y);

    document.getElementById("Result").innerHTML = "Result is: " + Result;  
}