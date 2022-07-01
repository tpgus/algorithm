/*
[문제]
두 문자열이 입력으로 주어질 때, 입력1이 입력2의 부분 문자열인지 구하기.
문자열의 순서는 항상 고정, 바뀌면 안 됨.

Time : O(N)
Space: O(1)
*/

//다른 다중 포인터 문제들과 비교 (입력 값 차이 and 정렬 필요성)

function isSubsequence(str1, str2) {
  let i = 0;
  for (let j of str2) {
    if (j === str1[i]) {
      i++;
    }
    if (i === str1.length - 1) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); //true;
console.log(isSubsequence("sing", "sttaaing")); //true;
console.log(isSubsequence("abc", "acb")); //false : 순서;
