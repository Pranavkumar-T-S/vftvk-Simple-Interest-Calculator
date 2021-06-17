function slide(val)
{
document.getElementById("percent").innerHTML=val+'%';
}
function compute()
{
    var p = Number(document.getElementById("principal").value),
    rate = Number(document.getElementById("rate").value),
    year = Number(document.getElementById("years").value);
    if(p<=0){
    window.alert("Enter a postive amount ");
    document.getElementById('principal').focus();
    }
    else{
    var amount=(p*year*rate/100)+p;
    statement='If you deposit <mark>'+p+'</mark>,<br> at an interest rate of <mark>'+rate+'%</mark>.<br> You will receive an amount of <mark>'+amount+'</mark>,<br> in the year <mark>'+(Number(new Date().getFullYear())+year)+'</mark>';
    document.getElementById('result').innerHTML=statement; 
    }
}
        