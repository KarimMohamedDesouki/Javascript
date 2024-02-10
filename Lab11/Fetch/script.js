let tabledata = document.getElementById("tabledata");

function users() {
    fetch("https://dummyjson.com/users") //gets data from the website 
        .then((res) => {//success response from the request 
            console.log(res);//status description down  
            return res.json();
        })
        .then((data) => {
            console.log(data); //object has an object users
            console.log(data.users);//object users which holds the data of each users
            for (let i = 0; i < data.users.length; i++) { // loop on every obj in the users and will add it in a table 
            let userobj =
     ` <tr>
        <td>${data.users[i].id}</td>
        <td>${data.users[i].firstName} ${data.users[i].lastName}</td>
        <td>${data.users[i].email}</td>
        <td style="text-align: center;"> <img src='${data.users[i].image} 'width = '100px' text-align: center</td>
      </tr> ` ;
                tabledata.insertAdjacentHTML("beforeend", userobj);//add the data before end of the table
            }
        })
        .catch((error) => console.log(error));//if there is an error catch it
}
// status
//      100-199 : Information response
//      200-299 : Successfull response
//      300-399 : Redirection response 
//      400-499 : Client error response     403 : "forbidden"   404 : "Not Found"
//      500-599 : Server error response



