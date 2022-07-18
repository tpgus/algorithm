/*
지수 정렬의 복잡도
정렬할 항목 수, 배열의 길이 = N
항목 중 가장 큰 자릿수 = K

[시간 복잡도]
최선, 평균, 최악 : O(nk)

[공간 복잡도]
O(N+K)

K가 크다면 기수 정렬을 사용하지 않는 것도 고려해 봐야한다.

빠른 비교 정렬 알고리즘은 O(N * log N) 이기 때문에 기수 정렬의 K가 logN에 비해 작은지 따져봐야 함.
예를 들어 N이 10이고 K가 2라면 지수 정렬이 빠른 것임. (이론상)
log10 = 3.xxxx이기 때문에

이론적으로 기수 정렬은 모든 비교 정렬 알고리즘보다 빠를 수 있다.
그런데, 컴퓨터가 메모리에 숫자를 저장하는 방식에 따라 실제로는 그렇지 않을 수 있다고 한다. (위키피디아)
하지만 최악의 경우에도 N * log N으로 비교정렬보다 나쁜 것은 아니다.

기수 정렬은 비교 정렬 알고리즘에 메모리 공간을 많이 사용하는 단점이 있다.
또한, 정렬 대상의 타입이 정수로 한정되는 단점 또한 존재한다. (10진수...)
*/

//정수의 자릿수를 반환하는 함수
function getDigitCount(num) {
  if (num === 0) {
    return 0;
  }
  return Math.floor(Math.log10(num)) + 1;
}

//정수의 i번째의 자리의 값을 반환하는 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//정수 배열에서 가장 큰 자릿수를 반환하는 함수
function getMostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, getDigitCount(nums[i]));
  }
  return maxDigit;
}

function radixSort(arr) {
  let maxDigits = getMostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }

    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([123, 4322, 3, 5, 245, 12312]));
