//모두 입력으로 정렬되어 있는 배열이 온다는 사실이 중요.

/*
Solution 1
Time : O(N)
Space: O(N)
*/
function countUniqueValues1(arr) {
  let obj = {};

  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    }
  }

  return Object.keys(obj).length;
}

/*
Solution 2
Time : O(N)
Space : O(1)
특히 이 예제는 정렬되어 있다는 사실이 중요
*/
function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let start = 0;
  let next = 1;
  let count = 1;
  while (next < arr.length) {
    if (arr[start] !== arr[next]) {
      count++;
    }
    start++;
    next++;
  }

  return count;
}

// Solution 3
// Time : O(N)
// Space : O(1)

/* j가 움직이며 i는 기준이 됨.
i
1 1 1 2 2 3 5
  j
*/
function countUniqueValues3(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;
  let temp = null; //temp는 이 예제에서 필요없음 (서로 교환하지 않고 옮기기만 해도 됨.)
  //그리고 for문으로 돌아도 됨 => 개선한 함수 counUniqueValues4 참고
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    j++;
  }
  return i + 1;
}

function countUniqueValues4(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues4([1, 1, 1, 1, 2])); //2
console.log(countUniqueValues4([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues4([])); //0
console.log(countUniqueValues4([-2, -1, -1, 0, 1])); // 4
