let arr = [1, 2, 34, 56, 7, 675, 53, 83, 36, 51, 7456];

console.log(arr, arr.length);
let arr2 = arr.slice(1, 5);
console.log(arr2, arr2.length);

// Syntax :-
// arr.slice(startIndex,LastIndex) LastIndex is excluded i.e. arr[LastIndex] is not printed
// arr.slice returns the new array , so we need to store in some variable . The new array
// is shallow copy of previous one

// Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
