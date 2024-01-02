while(true)
{
var string=prompt("enter a string");
if (string !==null)
{
    document.write(string);
    break;
}else{
    alert("re-enter the string correctly")
}
}
var countvowel=0;
for(var i=0;i<string.length;i++)
{   
    if(string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u')
    countvowel++;
}


alert (`the count number of the vowel is ${countvowel}`)
