while (true)
{
    var time = Number(prompt("enter the time you want with 24 hour format "))
    if(time >= 0 && time <= 24){
        confirm(`you entered time ${time}`);
        break;
    }else{
        alert("time entered incorrectly re-enter time :")
    }
}  

        switch (time) {
            case 0:
                 alert("time now is 12 AM")        
                 break;
            case 12:
                 alert("time now is 12 PM");        
                 break;
            default:
                if (time > 0 && time < 12) {
                    document.write(`time now is ${time} AM `);
                } else {
                    time = time - 12;
                    document.write(`time now is ${time} PM `);
                }
                break;
        }
