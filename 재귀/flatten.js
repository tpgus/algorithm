/*
주어진 N 차원 배열을 1차원 배열로 만들기
*/

function flatten1(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length === 0) {
      return;
    }

    if (Array.isArray(arr[0])) {
      helper(arr[0]);
    } else {
      result.push(arr[0]);
    }

    helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

function flatten2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return result.concat(flatten2(arr[i]));
      //위와 같다. result = result.concat(flatten2(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten1([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flatten1([[1], [2], [3]])); // [1,2,3]
console.log(flatten1([1, 2, 3, [4, 5, [6, 7]]])); // [1,2,3,4,5,6,7]
