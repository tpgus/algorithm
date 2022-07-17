let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map((val) => +val);
let x = +input[2];
arr.sort((a, b) => a - b);

let count = 0;
let i = 0;
let j = arr.length - 1;
while (i < j) {
  if (arr[i] + arr[j] === x) {
    count++;
    i++;
    j--;
  } else if (arr[i] + arr[j] < x) {
    i++;
  } else {
    j--;
  }
}
console.log(count);
