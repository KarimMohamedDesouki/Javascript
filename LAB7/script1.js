function login() {
    var usrname = document.getElementById("username").value;
    var passwd = document.getElementById("password").value;
    if (usrname === "admin" && passwd === "123"){
    confirm(" welcome ");
    }
    else{
    confirm("not registered");
    }
}

// var usrname =document.querySelectorAll("input[type='text']")[0].value;
    // var passwd =document.querySelectorAll("input[type='text']")[1].value;
    //  usrname = document.getElementById("username").value;
    //  passwd = document.getElementById("password").value;
   