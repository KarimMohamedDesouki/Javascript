/*
let numbers = [1, 2, 3, 4, 5, 6];

1. push()
    numbers.push(7);
        console.log(numbers);
        Output: [1, 2, 3, 4, 5, 6, 7]
            Explanation: push() adds one or more elements to the end of an array and returns the new length of the array.

2. pop()
    let lastElement = numbers.pop();
        console.log(lastElement);
        Output: 7
            Explanation: pop() removes the last element from an array and returns that element.

3. shift()
    let firstElement = numbers.shift();
        console.log(firstElement);
        Output: 1
            Explanation: shift() removes the first element from an array and returns that element.

4. unshift()
    numbers.unshift(0);
        console.log(numbers);
        Output: [0, 2, 3, 4, 5, 6]
            Explanation: unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

5. slice()
    let slicedArray = numbers.slice(2, 5);
        console.log(slicedArray);
        Output: [3, 4, 5]
                Explanation: slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

6. splice()
    numbers.splice(2, 2, 10, 11);
        console.log(numbers);
        Output: [0, 2, 10, 11, 5, 6]
            Explanation: splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

7. indexOf()
    let index = numbers.indexOf(5);
      console.log(index);
        Output: 4
            Explanation: indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.

8. includes()
    let includesNumber = numbers.includes(3);
        console.log(includesNumber);
        Output: true
            Explanation: includes() determines whether an array includes a certain element, returning true or false as appropriate.

9. map()
    let squaredNumbers = numbers.map(function(num) {
        return num * num;
        });
        console.log(squaredNumbers);
        Output: [0, 4, 100, 121, 25, 36]
            Explanation: map() creates a new array with the results of calling a provided function on every element in the array.

10. filter()
    let evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
    });
        console.log(evenNumbers);
        Output: [0, 4, 36]
            Explanation: filter() creates a new array with elements that pass the test implemented by the provided function.

*/