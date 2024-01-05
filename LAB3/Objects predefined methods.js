/*
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "coding"],
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

1. Object.keys()
    let keys = Object.keys(person);
        console.log(keys);
        Output: ["firstName", "lastName", "age", "address", "hobbies", "greet"]
            Explanation: Object.keys() returns an array of a given object's own enumerable property names.

2. Object.values()
    let values = Object.values(person);
        console.log(values);
        Output: ["John", "Doe", 30, {city: "New York", country: "USA"}, ["reading", "coding"], [Function: greet]]
            Explanation: Object.values() returns an array of a given object's own enumerable property values.

3. Object.entries()
    let entries = Object.entries(person);
        console.log(entries);
        Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30], ["address", {city: "New York", country: "USA"}], ["hobbies", ["reading", "coding"]], ["greet", [Function: greet]]]
            Explanation: Object.entries() returns an array of a given object's own enumerable property [key, value] pairs.

4. Object.assign()
    let newPerson = Object.assign({}, person, { age: 31 });
        console.log(newPerson);
        Output: {firstName: "John", lastName: "Doe", age: 31, address: {city: "New York", country: "USA"}, hobbies: ["reading", "coding"], greet: [Function: greet]}
            Explanation: Object.assign() copies the values of all enumerable properties from one or more source objects to a target object.

5. Object.freeze()
    Object.freeze(person);
    person.age = 32;
        console.log(person.age);
        Output: 30
            Explanation: Object.freeze() freezes an object, preventing new properties from being added, existing properties from being removed, and values from being changed.

6. Object.seal()
    Object.seal(person);
    person.middleName = "Michael";
    delete person.lastName;
        console.log(person.middleName);
        console.log(person.lastName);
        Output: undefined
            Explanation: Object.seal() seals an object, preventing new properties from being added and existing properties from being removed.

7. hasOwnProperty()
    console.log(person.hasOwnProperty("age"));
        Output: true
            Explanation: hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property.

8. Object.keys().length
    let numberOfProperties = Object.keys(person).length;
        console.log(numberOfProperties);
        Output: 6
            Explanation: Object.keys().length gives the number of own enumerable properties in an object.

9. Object.values().includes()
    let hasHobby = Object.values(person.hobbies).includes("reading");
        console.log(hasHobby);
        Output: true
            Explanation: Object.values().includes() checks if a specific value exists in the array of object values.

10. toString()
        console.log(person.toString());
        Output: [object Object]
            Explanation: toString() returns a string representing the object. By default, it returns "[object Object]".


*/