function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  return arr;
}

function insertionSort2(arr) {
  // 변수 i : 현재 정렬하고자 하는 요소의 인덱스
  for (let i = 1; i < arr.length; i++) {
    // 변수 j : 현재 정렬하고자 하는 요소의 바로 앞의 인덱스 (=정렬된 배열의 마지막 인덱스)
    for (let j = i - 1; j >= 0; j--) {
      // 따라서 j + 1 인덱스의 값은 현재 정렬하고자 하는 요소이다.
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort2([5, 2, 7, 1, 2, 3, 4]));
