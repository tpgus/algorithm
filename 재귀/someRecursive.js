/*
인수로 배열과 콜백함수가 전달될 때,
배열의 각 요소 중 하나라도 콜백 함수의 조건을 만족한다면, true, 아니면 false를 반환하는 함수를 재귀적으로 작성하기
*/

function callback(val) {
  if (val % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

//Solution 1 : helper 함수를 이용
function someRecursive(arr, callback) {
  let result = false;

  function helper(arr) {
    if (arr.length === 0) {
      return;
    }

    if (callback(arr[0])) {
      result = true;
      return;
    }

    helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

// console.log(someRecursive([2, 4, 6, 8, 10, 11], callback));

function someRecursive2(arr, callback) {
  if (arr.length === 0) {
    return false;
  }

  if (callback(arr[0])) {
    return true;
  }

  return someRecursive2(arr.slice(1), callback);
}

console.log(someRecursive2([2, 4, 5], callback));
