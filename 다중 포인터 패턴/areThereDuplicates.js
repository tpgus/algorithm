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
// Time : O(NlogN) 이거 O(N) 아닌가? sort가 있다고 해도 아래 while문이 O(N)이니까
// Space : O(1)
function areThereDuplicates2(...args) {
  args.sort((a, b) => a - b); // 여기여기여기여ㅣ겨ㅣ여ㅣ기 문자열이 왜 정렬이 안 됨?
  console.log(args);
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
