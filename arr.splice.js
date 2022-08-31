let arr = [1, 2, 34, 56, 7, 675, 53, 83, 36, 51, 7456];

console.log(arr, arr.length);

console.log(arr.splice(1, 2, "FirstIndex", "SecondIndex"));

console.log(arr);
console.log(arr.name);

// Syntax :-
//arr.splice(start,howmanyElementstobeReplaced,valuesToBeAdded/Replaced)
//It returns array of Replaced Elements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
