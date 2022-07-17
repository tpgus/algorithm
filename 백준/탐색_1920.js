let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let arr = input[1].split(" ").map((val) => +val);
let targets = input[3].split(" ").map((val) => +val);

arr.sort((a, b) => a - b);

let result = [];

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      result.push(1);
      return;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  result.push(0);
}

targets.forEach((val) => {
  binarySearch(arr, val);
});

console.log(result.join("\n"));
