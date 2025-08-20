var arr = [];
arr.push("B");
arr.push("C");
arr.unshift("A");
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);
console.clear();

arr.unshift("A");
arr.push("C");
arr.push("D");
arr.push("E");
arr.push("F");
// [(0)'A', (1)'B', (2)'C', 'D', 'E', 'F']
// console.log(arr.splice(1, 2));
var arr2 = arr.slice(1, 3);
console.log(arr2);
console.log(arr);
