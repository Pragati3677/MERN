// Stack using Array

let stack = [];

// Push elements
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after Push:");
console.log(stack);

// Pop element
let removed = stack.pop();

console.log("Removed element:", removed);

console.log("Stack after Pop:");
console.log(stack);

// Peek
console.log("Top element:", stack[stack.length - 1]);

// Check if stack is empty
if (stack.length === 0) {
    console.log("Stack is Empty");
} else {
    console.log("Stack is Not Empty");
}