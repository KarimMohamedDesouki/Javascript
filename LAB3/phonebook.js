var phonebook = [];
while (true)
{
var operation = prompt("enter the operation you want ( add , search) :")
switch (operation) {
    case "add":
        var Name = prompt(" enter the Name of the contact : ");
        var phoneNumber = prompt(` enter the phoneNumber of the ${Name} : `);
        var contact = {
            Name:Name,
            phoneNumber:phoneNumber
        };
        phonebook.push(contact);
        alert("contact added successfully")
        break;
    case "search":
        while(true)   
        {   var search = prompt(" what are you searching for : ")
            // to find the Name and the phone number from the array of phonebook
            var founditem = phonebook.find(function(element)
            {
                return element.Name === search ||  element.phoneNumber === search;
            });
            if (founditem)
            {
                confirm(`Contact found, his Name is ${Name} and his phoneNumber is ${phoneNumber}`);
                break;
            }else{
            alert(`contact doesn't exist re-enter the correct data`)
                }
        }
        break;
        default:
        alert("operation undefined")
        break;
}
var shouldContinue = confirm("Do you want to perform another calculation?");
    if (!shouldContinue) {
        break; // exit the loop if the user chooses not to continue
    }
}
