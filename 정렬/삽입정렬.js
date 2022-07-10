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
// [1,5,4,2,3] [1] 5  => [1,5]
// [1,5,4,2,3] [1,5] 4 => [1,4,5]
// [1,4,5,2,3] [1,4,5] 2 => [1,2,4,5]
// [1,2,4,5,3] [1,2,4,5] 3 => [1,2,3,4,5]

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
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
