function ChangeMoney() {
    var A = document.getElementById("Amount").value;
    var B = document.getElementById("FromCurrency").value;
    var C = document.getElementById("ToCurrency").value;
if( B == "USD" && C == "VND" ){
    document.getElementById("Result").innerHTML = "Result is: " + A * 23000 + "-VND";  
}

    else if( B== "VND" && C =="USD"){
        document.getElementById("Result").innerHTML = "Result is: " + A / 23000 + "-USD";
    }

    else if( B== "VND" && C =="VND"){
        document.getElementById("Result").innerHTML = "Result is: " + A * 1+ "-VND";
    }

    else if( B== "USD" && C =="USD"){
        document.getElementById("Result").innerHTML = "Result is: " + A * 1 + "-USD";
    }
}
   