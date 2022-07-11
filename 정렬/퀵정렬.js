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

console.log(pivot([5, 4, 2, 6, 7, 1]));
