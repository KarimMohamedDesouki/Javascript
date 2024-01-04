while(true)
{
    var username =prompt("enter your username:");
    var password =prompt("enter your password:");
    
if(username== "admin" && password == "421$$")
{
    alert(`welcome ${username} login success`);
    break;
}else {
    if (username !== "admin" && password !== "421$$" )
    {
        alert("both username and password are incorrect");
    } else if(username !== "admin")
    {
        alert("the username is incorrect");
    } else if (password !== "421$$" )
    {
        alert("the password is incorrect");
    }
  
}
}
