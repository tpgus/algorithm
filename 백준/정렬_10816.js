let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

input[1] = input[1].split(" ");
input[1] = input[1].map((val) => Number(val));
input[1].sort((a, b) => a - b);

input[3] = input[3].split(" ");
input[3] = input[3].map((val) => Number(val));

let my = input[1];
let targets = input[3];
let result = [];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      count++;
      arr.splice(middle, 1);
      start = 0;
      end = arr.length - 1;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return count;
}

for (let i = 0; i < targets.length; i++) {
  result.push(binarySearch(my, targets[i]));
}
result = result.join(" ");
console.log(result);
