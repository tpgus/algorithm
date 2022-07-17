let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.shift();
input = input.map((val) => +val);
// input.sort((a, b) => a - b);
// 내장 메소드 말고 직접 정렬하기
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) {
    result = result.concat(arr2.slice(j));
  } else {
    result = result.concat(arr1.slice(i));
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half));
  return merge(left, right);
}
input = mergeSort(input);
console.log(input.join("\n"));
