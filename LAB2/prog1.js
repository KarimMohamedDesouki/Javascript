
    while (true) {
        age = prompt("Enter your age:");
        
        if (age >= 0) {
            confirm(`Your age is ${age}`);
            break; // Exit the loop if age is positive
        } else {
            alert("Please enter a valid positive number for age.");
        }
    }
    while(age >=0)
    {
        switch (true) {
            case (age >= 1 && age <= 10):
                 alert("you are child")        
                break;
            case (age >= 11 && age <= 18):
                alert("you are teenager");        
                break;
            case (age >= 19 && age <= 50):
                alert("you are grown up");        
                break;
            case (age > 50):
                alert("you are old");        
                break;
            default:    
                alert("unkown status");
                break;
        }
        break
    }
    // do {
    //     if (checkNull(age)) val = age;
    //   } while (checkNull(age));

    // function checkNull(_str) {
    //     return _str !=null;
    //   }
    

