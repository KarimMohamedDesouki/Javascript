let form1 = document.getElementById("main_form");
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("usrname").value; // get the value of the username from user
    if (username == "") {
        alert("the username field is empty");
        return;
    } else {
        var regex = /^[a-zA-Z\s]+$/; // the reg exp should be letter from a to z capital or small
        if (regex.test(username) === false) {
            alert("Please enter a valid format name");
            return;
        }
    }
    var mail = document.getElementById("email").value; // get the value of the username from user
    if (mail == "") {
        alert("the mail field is empty");
        return;
    } else {
        var regex = /^\S+@\S+\.\S+$/; // reg expression of email should contain @ and .
        if (regex.test(mail) === false) {
            alert("Please enter a valid format mail");
            return;
        }
    }
    var pass = document.getElementById("pass").value; // get the value of the password from user 
    if (pass == "") {
        alert("the password field is empty");
        return;
    } else {
        var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; // regex of password 
        if (regex.test(pass) === false) {
            alert("Please enter a valid format password");
            return;
        }
    }
    var phone = document.getElementById("phone").value; // get the value of the phonenumber from user

    if (phone == "") {
        alert("the phoneNumber field is empty");
        return;
    } else {
        var regex = /[1-9]\d{9}$/; // reg exp of the phonenumber to take all numbers 
        if (regex.test(phone) === false) {
            alert("Please enter a valid format phoneNumber");
            return;
        }
    }
    alert(`the data is : userName : ${username} Email : ${mail} passwod : ${pass} phoneNumber : ${phone}`) // show the data of the user
    window.location = event.currentTarget.href;
});

