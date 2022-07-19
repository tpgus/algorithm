/*
[의사 코드]
퀵 정렬은 피벗 값 자체가 정렬하고자 하는 요소이다.
정렬된 pivot 요소의 인덱스를 반환하는 함수를 정의한다.
정렬하고자 하는 배열, 시작 인덱스, 끝 인덱스라는 세 개의 인수를 받는다.
시작 인덱스와 끝 인덱스의 기본 값은 0, 배열의 길이-1 이다.

배열의 시작 부분에서 피벗을 선택한다. (피벗은 시작, 끝, 중간, 무작위로 선택할 수 있다.)
피벗 인덱스를 변수로 저장한다.

마지막에는 피벗 인덱스를 피벗과 교환하고 피벗 인덱스를 반환한다.

*/
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

//pivot 함수 case 1
function pivot1(arr, start = 0, end = arr.length - 1) {
  let pivotIdx = start;
  //마지막에 피벗이 위치할 인덱스를 보관하기 위함. 또한 피벗보다 작은 값이 얼마나 많은지 갯수를 세는 카운터이기도 함.
  let pivotVal = arr[start];

  for (let i = start + 1; i <= end; i++) {
    //첫 번째 항목을 스스로 비교할 필요가 없으니 시작점 이후의 값을 설정한다.
    if (pivotVal > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  //피벗 값이 있는 시작 인덱스와 피벗 값이 올바른 위치를 나타내는 pivotIdx의 값을 교환한다.
  swap(arr, pivotIdx, start);
  return pivotIdx;
  //정렬된 피벗 요소의 인덱스를 반환한다.
}

//pivot 함수  : Solution 2
function pivot2(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    return;
  }
  let pivotVal = arr[start];
  let pivotIdx = start;
  while (start <= end) {
    while (start <= end && arr[start] <= pivotVal) {
      start++;
    }
    while (start <= end && arr[end] >= pivotVal) {
      end--;
    }
    if (start <= end) {
      swap(arr, start, end);
    }
  }
  swap(arr, pivotIdx, end);
  return end;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  // 시작과 끝이 같다는 건, 배열의 길이가 1이하라는 것
  // 병합 정렬은 재귀로 들어오는 arr이 항상 다르기 때문에 arr.length <= 1 이라는 조건을 통해 검사가 가능하지만
  // 퀵 정렬은 항상 원본 배열(같은 배열)에 대해서 작업한다.
  // 퀵 정렬에서 바뀌는 것은 왼쪽 시작 범위를 나타내는 left, 오른쪽 끝 범위를 나타내는 right 포인터이다.
  // 재귀를 거듭할 수록 범위는 작아지며 left, right 또한 서로 가까워지게 된다.
  let pivotIdx = pivot1(arr, left, right);
  quickSort(arr, left, pivotIdx - 1); //left
  quickSort(arr, pivotIdx + 1, right); //right
  return arr;
}
// 모든 과정이 새로운 배열이 만들지 않고 기존 배열에 대해 수행한다.
// 즉 베이스 케이스는 단순히 전달된 `새로운` 배열의 길이를 통해 요소가 한 개 이하가 있는지 확인하는 것이 아니라,
// 원본 배열의 하위 배열의 길이를 확인하는 것이다.
// 따라서 재귀를 호출할 때 하위 배열을 나타내는 시작 인덱스와 끝 인덱스가 다르다.
// 어느 시점이든 전달되는 배열은 원본의 전체 배열이다. 다만, 하위 배열의 범위를 알려주는 인덱스가 다를 뿐
// 하위 배열의 범위가 작아질 수록 left와 right는 가까워지고 1이라면 같아진다

console.log(quickSort([6, 5, 2, 4, 3, 1]));
