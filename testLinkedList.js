import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

// Append elements
list.append(10);
list.append(20);
list.append(30);

// Prepend an element
list.prepend(5);

// Display the list
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// Check size
console.log(list.size()); // Output: 4

// Check if list contains a value
console.log(list.contains(20)); // Output: true
console.log(list.contains(40)); // Output: false

// Find index of a value
console.log(list.find(20)); // Output: 2

// Remove element at index
list.removeAt(1);
console.log(list.toString()); // Output: ( 5 ) -> ( 20 ) -> ( 30 ) -> null

// Pop the last element
list.pop();
console.log(list.toString()); // Output: ( 5 ) -> ( 20 ) -> null

// Insert element at index
list.insertAt(15, 1);
console.log(list.toString()); // Output: ( 5 ) -> ( 15 ) -> ( 20 ) ->  