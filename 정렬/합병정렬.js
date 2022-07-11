//합병을 담당하는 함수 Solution 1 : 각각 정렬된 두 개의 배열을 인수로 취한다.
//합병 정렬에서 최초로 병합 함수를 호출할 때에는 배열의 길이가 0 또는 1이다 즉, 이미 정렬되어 있다.
//이미 정렬된 배열들을 가지고 병합 함수를 호출하는 것이다.
function merge1(arr1, arr2) {
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
  // 둘 중 하나가 먼저 배열의 끝에 도달했다면, 다른 배열의 나머지 요소들에 대한 작업을 수행한다.
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

//합병을 담당하는 함수 Solution 2 : 각각 정렬된 두 개의 배열을 인수로 취한다
function merge2(arr1, arr2) {
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
  // 둘 중 하나가 먼저 배열의 끝에 도달했다면, 다른 배열의 나머지 요소들에 대한 작업을 수행한다.
  if (i === arr1.length) {
    result = result.concat(arr2.slice(j));
  } else {
    result = result.concat(arr1.slice(i));
  }
  return result;
}

// 재귀를 통해 배열을 절반으로 나누고 병합 함수를 호출하여 정렬된 하나의 배열을 만드는 메인 함수
// Solution 1
function mergeSort1(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return merge1(
    mergeSort1(arr.slice(0, Math.round(arr.length / 2))),
    mergeSort1(arr.slice(Math.round(arr.length / 2)))
  );
}

// Solution 2
function mergeSort2(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);
  let left = mergeSort2(arr.slice(0, half)); //return 을 통해 값을 left 값을 반환 받아야 그 다음 행을 진행한다 : right 진행
  let right = mergeSort2(arr.slice(half));
  return merge1(left, right);
}

console.log(mergeSort2([5, 2, 3, 7, 6, 1, 4]));
