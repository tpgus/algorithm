/*
[문제] 
입력 1 : 정수들이 담긴 배열 arr
입력 2 : 자연수 n

배열에서 연속된 n개의 합의 최대값 찾기
*/

//Naive Solution
//Time : O(N^2)
//Space: O(1)
function maxSubarraySum1(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let max = -Infinity;
  // 조건 검사 부분
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j]; // 이 부분
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

//Soluntion 2 : Sliding Window
//Time : O(N)
//Space : O(1)

function maxSubarraySum2(arr, n) {
  let maxSum = 0;
  let sum = 0;
  if (arr.length < n) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  sum = maxSum;
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, sum);
    //Math.max()는 선형시간 복잡도를 가지지만, 인수가 2개일 때에는 상수시간 복잡도를 가진다.
    //폴리필
    //https://github.com/v8/v8/blob/cd81dd6d740ff82a1abbc68615e8769bd467f91e/src/js/math.js#L105-L129
  }

  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5, 13], 4));
console.log(maxSubarraySum2([4, 2, 1, 6], 1));
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum2([], 4));
