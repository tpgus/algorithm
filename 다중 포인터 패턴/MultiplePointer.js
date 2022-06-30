/*
[문제]
입력 값으로 정렬된 정수 배열을 받아 가장 먼저 합이 0이되는 정수 한 쌍을 찾아서 배열로 반환하기
없다면, undefined를 반환

정렬되어 있어야 하나? 일단, 모든 예제에서는 정렬되어 있어야 했음.
*/

// Solution 1 : Naive Solution
// Time : O(N^2)
// Space : O(1)
function sumZero1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // i<arr.length로 해도 됨.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Solution 2 : Multiple Pointer
// Time : O(N)
// Space : O(1)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // 주의 left <= right가 아님. [0,1,2,3]일 경우
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero2([0, 1, 2, 3])); // undefined
console.log(sumZero2([1, 2, 3])); //undefined
