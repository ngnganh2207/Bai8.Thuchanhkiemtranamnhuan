var year=parseInt(prompt("Enter the year"));

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert(year+ " is a leap year");
        }
        else{alert(year+ " isn't a leap year");}
    }
    else{alert(year + " is a leap year");}
}
else{
    alert(year + " isn't a leap year");
}