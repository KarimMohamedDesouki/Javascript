// Example 1
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     },
//     hobbies: ["reading", "coding"],
//     greet: function() {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//     }
// };

// // 1. Object.keys()
// let keys = Object.keys(person);
// console.log(keys);
// // Output: ["firstName", "lastName", "age", "address", "hobbies", "greet"]
// // Explanation: Object.keys() returns an array of a given object's own enumerable property names.

// // 2. Object.values()
// let values = Object.values(person);
// console.log(values);
// // Output: ["John", "Doe", 30, {city: "New York", country: "USA"}, ["reading", "coding"], [Function: greet]]
// // Explanation: Object.values() returns an array of a given object's own enumerable property values.

// // 3. Object.entries()
// let entries = Object.entries(person);
// console.log(entries);
// // Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30], ["address", {city: "New York", country: "USA"}], ["hobbies", ["reading", "coding"]], ["greet", [Function: greet]]]
// // Explanation: Object.entries() returns an array of a given object's own enumerable property [key, value] pairs.

// // 4. Object.assign()
// let newPerson = Object.assign({}, person, { age: 31 });
// console.log(newPerson);
// // Output: {firstName: "John", lastName: "Doe", age: 31, address: {city: "New York", country: "USA"}, hobbies: ["reading", "coding"], greet: [Function: greet]}
// // Explanation: Object.assign() copies the values of all enumerable properties from one or more source objects to a target object.

// // 5. Object.freeze()
// Object.freeze(person);
// person.age = 32;
// console.log(person.age);
// // Output: 30
// // Explanation: Object.freeze() freezes an object, preventing new properties from being added, existing properties from being removed, and values from being changed.

// // 6. Object.seal()
// Object.seal(person);
// person.middleName = "Michael";
// delete person.lastName;
// console.log(person.middleName);
// console.log(person.lastName);
// // Output: undefined
// // Explanation: Object.seal() seals an object, preventing new properties from being added and existing properties from being removed.

// // 7. hasOwnProperty()
// console.log(person.hasOwnProperty("age"));
// // Output: true
// // Explanation: hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property.

// // 8. Object.keys().length
// let numberOfProperties = Object.keys(person).length;
// console.log(numberOfProperties);
// // Output: 6
// // Explanation: Object.keys().length gives the number of own enumerable properties in an object.

// // 9. Object.values().includes()
// let hasHobby = Object.values(person.hobbies).includes("reading");
// console.log(hasHobby);
// // Output: true
// // Explanation: Object.values().includes() checks if a specific value exists in the array of object values.

// // 10. toString()
// console.log(person.toString());
// // Output: [object Object]
// // Explanation: toString() returns a string representing the object. By default, it returns "[object Object]".

// // Note: The greet method is a custom method added to the person object for illustration purposes.




// Example 2:
// let numbers = [1, 2, 3, 4, 5, 6];

// // 1. push()
// numbers.push(7);
// console.log(numbers);
// // Output: [1, 2, 3, 4, 5, 6, 7]
// // Explanation: push() adds one or more elements to the end of an array and returns the new length of the array.

// // 2. pop()
// let lastElement = numbers.pop();
// console.log(lastElement);
// // Output: 7
// // Explanation: pop() removes the last element from an array and returns that element.

// // 3. shift()
// let firstElement = numbers.shift();
// console.log(firstElement);
// // Output: 1
// // Explanation: shift() removes the first element from an array and returns that element.

// // 4. unshift()
// numbers.unshift(0);
// console.log(numbers);
// // Output: [0, 2, 3, 4, 5, 6]
// // Explanation: unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

// // 5. slice()
// let slicedArray = numbers.slice(2, 5);
// console.log(slicedArray);
// // Output: [3, 4, 5]
// // Explanation: slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

// // 6. splice()
// numbers.splice(2, 2, 10, 11);
// console.log(numbers);
// // Output: [0, 2, 10, 11, 5, 6]
// // Explanation: splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// // 7. indexOf()
// let index = numbers.indexOf(5);
// console.log(index);
// // Output: 4
// // Explanation: indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.

// // 8. includes()
// let includesNumber = numbers.includes(3);
// console.log(includesNumber);
// // Output: true
// // Explanation: includes() determines whether an array includes a certain element, returning true or false as appropriate.

// // 9. map()
// let squaredNumbers = numbers.map(function(num) {
//     return num * num;
// });
// console.log(squaredNumbers);
// // Output: [0, 4, 100, 121, 25, 36]
// // Explanation: map() creates a new array with the results of calling a provided function on every element in the array.

// // 10. filter()
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);
// // Output: [0, 4, 36]
// // Explanation: filter() creates a new array with elements that pass the test implemented by the provided function.














// Example 3:
// function outerFunction(x) {
//     // Outer function scope
//     function innerFunction(y) {
//         // Inner function scope
//         return x + y;
//     }

//     return innerFunction;
// }

// // Create a closure by calling outerFunction with a value
// let closureExample = outerFunction(5);

// // Use the closure to access variables from the outer function
// let result = closureExample(3);

// console.log(result); // Output: 8
