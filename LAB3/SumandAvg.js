var sum=0;
var average;
var arr = []; // empty array
while (true)
{
while(true)
{   //get the length of the array
    var arrayLength = parseInt(prompt("enter the Length of your array : "))
    //to verify the arraylength is number 
    if (arrayLength>0)
    {
        break;
    }else{
        prompt(" re-enter a positive number : ")
    }
}
for(var i = 0; i < arrayLength; i++)
{
while(true)
{
    var userInput = Number(prompt(`Enter element is ${i + 1}  : `));
    //to verify the input is number 
    if (userInput >= 0 || userInput <= 0)
    {
        break;
    }else{
        alert(" re-enter a number : ")
    }
}
    arr.push(userInput) //to push elements in the array
    sum=sum+userInput;

}
confirm(`The array you created is: { ${arr.join(",")} } `);

confirm(`the sum is : ${sum} `);
average=sum/arrayLength;
confirm(`the average is : ${average}`);
var Continue = confirm("Do you want to perform another calculation?");
    if (Continue) {
        //will reset the values to make new array and calculate new sum and avg
        sum = 0;
        average = 0;
        arr = [];
   }else{
        break; // exit the loop if the user chooses not to continue
    }
}


