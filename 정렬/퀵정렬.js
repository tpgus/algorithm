function pivot(arr, start = 0, end = arr.length - 1) {
  let swapIdx = start;
  let pivotVal = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotVal > arr[i]) {
      swapIdx++;
      let temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1); //left
    quickSort(arr, pivotIdx + 1, right); //right
  }
  return arr;
}

console.log(quickSort([6, 5, 2, 4, 3, 1]));
