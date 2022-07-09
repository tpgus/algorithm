/*
[문제]
입력 1 : 양의 정수가 담긴 배열
입력 2 : 양의 정수

[조건]
입력2의 값 <= 배열 안의 연속된 숫자들의 합을 만족하는 부분 배열의 최소 길이

조건을 만족하지 못한다면 0을 리턴
*/

//Sliding Window
//Time : O(N)
//Space : O(1)
function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 2, 3, 5], 8));

//12 1 2 3 11 8
