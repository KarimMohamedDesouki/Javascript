while(true)
{

while(true)
{   firstnumber = parseInt(prompt("enter the firstNumber:"));
    // parseInt is to convert the input of the user which is string to int
    if(firstnumber>=0 || firstnumber<=0)
    {
        break;
    }else{
        alert("re-enter a data-type number"); 
    }
}
while(true)
{    var operator = prompt("enter the operation ( + , - , * , / , % ):");
    if(operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%")
    {
        break;
    }else{
        alert(" re-enter an operator from the given "); 
    }
}    
while(true)
{    secondnumber = parseInt(prompt("enter the secondNumber:"));
    // parseInt is to convert the input of the user which is string to int
    if(secondnumber>=0 || secondnumber<=0)
    {
        break;
    }else{
        alert("re-enter a data-type number"); 
    }
}
switch(operator){
    case ("+"):
        var sum = firstnumber + secondnumber ;
        alert(`the result is of ${firstnumber} + ${secondnumber} is : ${sum}`);
        break;
    case ("-"):
        var sub = firstnumber - secondnumber ;
        alert(`the result is of ${firstnumber} - ${secondnumber} is : ${sub}`);
        break;
    case ("*"):
        var multi = firstnumber * secondnumber ;
        alert(`the result is of ${firstnumber} * ${secondnumber} is : ${multi}`);
        break;
    case ("/"):
        var div = firstnumber / secondnumber ;
        alert(`the result is of ${firstnumber} / ${secondnumber} is : ${div}`);
        break;
    case ("%"):
        var mod = firstnumber % secondnumber ;
        alert(`the result is of ${firstnumber} % ${secondnumber} is : ${mod}`);
        break;
}
var shouldContinue = confirm("Do you want to perform another calculation?");
    if (!shouldContinue) {
        break; // exit the loop if the user chooses not to continue
    }
}