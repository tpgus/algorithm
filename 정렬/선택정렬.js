//내가 푼 방법
function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[minIdx] > arr[j + 1]) {
        minIdx = j + 1;
      }
    }
    //현재 i가 가장 작은 값이라 해도 값의 교환이 일어난다.
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

//최적화 솔루션 : 현재 i가 가장 작은 값의 인덱스가 아닐 때에만 교환이 일어난다.
//반복문 변수 확인
//버블 정렬은 매 반복마다 값의 교환이 일어난다.
//선택 정렬은 반복의 마지막에 값의 교환이 일어난다.
function selectionSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      //이미 i를 최솟 값의 인덱스라고 설정했기 때문에 그 다음 요소부터 시작
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp; //[1,4,3,3,5];
    }
  }
  return arr;
}

console.log(selectionSort2([5, 4, 2, 3, 7]));
