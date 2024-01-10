class person {
    #healthrate;
    constructor( fullname , money , sleepmood , healthRate, age)  {
      this.fullname = fullname;
      this.money = money;
      this.sleepmood = sleepmood;//
      this.healthRate = healthRate;
      this.age = age;
    }
  
    gethealthrate() {
        return this.#healthrate;
    }
    sethealthrate(value) {
        this.#healthrate=value;
        if(this.#healthrate < 0 || this.#healthrate > 100){
            alert("the healtrate should be btw 0 than 100");
            karim.sethealthrate();

        }
    }
  sleep( hours )
  {
      if (hours > 7){
          this.sleepmood = "lazy"
      }else if(hours < 7){
          this.sleepmood = "tired"
      }else if(hours == 7){
          this.sleepmood = "happy"
      }else{
          this.sleepmood = "undifiend"
      }
  }

  eat(meals){
      if (meals == 3){
          this.healthRate = "100 health rate"
      }else if(meals == 2){
          this.healthRate = "75 health rate"
      }else if(meals == 1){
          this.healthRate = "50 health rate"
      }else{
          this.healthRate = "undifiend"
      }
  }

  buy(items){
      if (items == 1) {
          this.money -= 10;
        }
  }
}
  

class Employee extends person{
    static lastId = 0;
    salary=1000;
    constructor(fullname, money, sleepmood , healthRate , age , workMood, salary , isManager){
    const id = ++Employee.lastId;
    const email = `${fullname.replace(/\s/g, "")}@iti.gov.eg`;
        super(fullname , money , sleepmood , healthRate , age);
        this.id = id;
        this.email = email;
        this.salary = salary;
        this.workMood = workMood;
        this.isManager = isManager === "mng";
    }

    

    work(hour){
        if (hour > 8){
            this.workMood = "tired"
        }else if(hour < 8){
            this.workMood = "lazy"
        }else if(hour == 8){
            this.workMood = "happy"
        }else{
            this.workMood = "undifiend"
        }
    }

    //setters and getters of the salary
    getsalary() {
        return this.salary;
    }
    setsalary(value) {
        this.salary=value;
        if(this.salary<1000){
            alert("the salary should be more than 1000");
            karim.salary=1000;
        }
    }
    
}

class office{
    constructor(name ,employees){
        this.name = name;
        this.employees = employees;
    }

    getAllEmployees() {
        return this.employees;
      }
    
    getEmployee(empId){
        for (let employee of this.employees) {
            var Found = 0;
            if (employee.id === empId) {
              Found = 1;
        // confirm("employee is found");
        if (employee.isManager == 1) { 
            document.write("it is a manager");
            console.log(`fullname : ${employee.fullname}  id : ${employee.id} email : ${employee.email} workmood : ${employee.workMood} ismanager : ${employee.isManager}`);
        }
        else {
            document.write("it is a employee"); 
            console.log(`fullname : ${employee.fullname} salary : ${employee.salary} id : ${employee.id} email : ${employee.email} workmood : ${employee.workMood} ismanager : ${employee.isManager}`);
        }
        break;
    }
    }
    return Found;    
}

    hire (employee){
        this.employees.push(employee);
    }

    fire(empId) {
        let index = 0;
        var NotFound = 1;
        for (let employee of this.employees) {
        if (employee.id === empId) {
        NotFound = 0;
        this.employees.splice(index, 1);
        break;
        }
        index++;
        }
        return NotFound;
    }
}

function Menu(){
    var officeName = "first office";
    var emparr = new Array();
    var obj = new office(officeName, emparr); 
       
 do {
    var operation = Number(prompt("choose from options , 1: hire new employee , 2: fire employee , 3: search on employee , 4: dislpay all employee  , 5: quit"));

  switch (operation) {
    case 1:   //hire employeee
        {   var isManager= prompt(`do you want to hire \n manager "mng" \n employee "emp"`);
            var fullname = prompt("enter his name : ");
            var age = Number(prompt("enter his age : "));
            var salary = Number(prompt("enter his salary :"));
            var money = Number(prompt("enter the money : "))
            var healthRate = Number(prompt("enter his healthRate : "));
            const emp = new Employee(
                fullname,
                money,
                healthRate,
                age,
                salary,
                isManager
            );
        obj.hire(emp);
        submit = confirm('You want make any operations press "Yes" or press "No"');
            break;
        }
    case 2:   //fire employee
        {   var empId = prompt("enter the employee id")
            value = obj.fire(empId);
            if (value == 0) {
                alert(`employee with ID : ${empId} is fired`);    
            }
        submit = confirm('You want make any operations press "Yes" or press "No"');
            break;
        }
    case 3:   //search fo employee
        {   var empId = prompt (`enter the name you want to search for`)
                Found = obj.getEmployee(empId);
                console.log(Found);
                
        if (Found === 0) {
          alert(`Found Employee With ID = ${empId}`);
        }
            submit = confirm('You want make any operations press "Yes" or press "No"');
            break;
        }
    case 4:   //display all employee
           emparr = obj.getAllEmployees();
        for (var employee of emparr) {
            console.log(`Full Name: ${employee.fullname}\nMoney: ${employee.money}\nHealth Rate: ${employee.healthRate}\nAge: ${employee.age}\nID: ${employee.id}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nsalary: ${employee.salary}\nisManager: ${employee.isManager}`);
            prompt(`Full Name: ${employee.fullname}\nMoney: ${employee.money}\nHealth Rate: ${employee.healthRate}\nAge: ${employee.age}\nID: ${employee.id}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nsalary: ${employee.salary}\nisManager: ${employee.isManager}`);
    
            // submit = confirm('You want make any operations press "Yes" or press "No"');
            //      break;
            }
            submit = confirm('You want make any operations press "Yes" or press "No"');
            break;
        
            
            case 5:   //Quit
            submit = false;           
            break;
    default:
        alert (`please enter a valid number`);
        break;
    }
    
}while(submit);
}

Menu();