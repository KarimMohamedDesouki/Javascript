/*
function outerFunction(x) {
    // Outer function scope
    function innerFunction(y) {
        // Inner function scope
        return x + y;
    }

    return innerFunction;
}

// Create a closure by calling outerFunction with a value
let closureExample = outerFunction(5);

// Use the closure to access variables from the outer function
let result = closureExample(3);

console.log(result); // Output: 8
*/