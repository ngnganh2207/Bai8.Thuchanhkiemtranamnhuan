let year = parseInt(prompt("Enter the year please:"));
if (year%4== 0){
    if(year%100== 0){
        if(year%400== 0) {
            document.getElementById("namnhuan").innerHTML = year + " is a leap year";
        }else{
            document.getElementById("namnhuan").innerHTML=year + " is not a leap year";
            }
        }else{
            document.getElementById("namnhuan").innerHTML=year + " is a leap year";
        }
    }else{
        document.getElementById("namnhuan").innerHTML=year + " is not a leap year";
    }
