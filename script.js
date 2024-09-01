function percentage_1(){
    var percent = document.getElementById("percent").value;
    var num = document.getElementById("num").value;
    document.getElementById("value1").value = (num/100)*percent;
}

function percentage_2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("value2").value = (num1/num2)*100;
}
function percentage_3(){
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;


    if (num3 > num4 ) {
        value4 = (num3 - num4)/num3*100 
    } else {
        value4 =(num4 - num3)/num3*100
    }
    document.getElementById("value3").value =value4
    // document.getElementById("value3").value = (num3 - num4)/num3*100;
}