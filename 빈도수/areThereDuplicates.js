/*
[문제]
입력 값들 중 서로 중복된 값이 있는지 판별하기
*/

// Solution 1
// Time : O(N)
// Space : O(N)
function areThereDuplicates1(...args) {
  const obj = {};
  for (let i of args) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// Solution 2 : Multiple Pointer
// Time : O(N log N) // 브라우저에 따라 다르지만 보통 n log n (최선일때 O(N))
// Space : O(N)
function areThereDuplicates2(...args) {
  args.sort((a, b) => a - b); // 여기여기여기여ㅣ겨ㅣ여ㅣ기 문자열이 왜 정렬이 안 됨?
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

/*
배열이나 문자열 같은 선형구조에 좋음 -> 정렬되어 있어야 하나?
한 쌍의 값이나 조건을 충족시키는 값을 찾는 데 좋다.
두 개의 포인터를 사용한다.
1. 왼쪽 끝에서 시작하는 포인터1 오른쪽 끝에서 시작하는 포인터2가 서로 중간 방향으로 이동하면서 검사
2. 왼쪽 첫 번째에서 시작하는 포인터1, 왼쪽 두 번째에서 시작하는 포인터2 모두가 오른쪽 끝으로 이동하면서 검사, 혹은 그 반대
즉, 두 개의 포인터가 서로를 향해 이동하거나 같은 방향으로 이동한다.
*/

console.log(areThereDuplicates2(1, 4, 3, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));
