// Naive Soluton
// 반복할 때마다 가장 큰 수가 마지막에 정렬되지만, 매번 끝까지 비교한다.
// 마지막은 undefined와 비교하지만 에러는 발생하지 않는다.
// j < arr.length -1을 해주면 되긴하다.
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 최적화 솔루션 : 매 반복마다 비교횟수가 줄어든다.
// swapped 변수를 이용해
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      //어쨌든 n-1번 돌아야 함.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
        /*
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        */
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

function bubbleSort3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort1([54, 3, 2, 6, 122]));
