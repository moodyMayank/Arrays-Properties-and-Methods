let arr = [1, 2, 34, 56, 7, 675, 53, 83, 36, 51, 7456];
let arr1 = ["aa", "bb", "cc"];

console.log(arr);
console.log(arr1);
let concatArr = arr.concat(arr1);

console.log(concatArr);

let arr2 = ["zz", "yy", "xx"];

concatArr = arr.concat(arr1, arr2);

console.log(concatArr);
