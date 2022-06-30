/*
[문제] 두 개의 입력이 주어진다. 첫 번째는 정렬된 정수들이 담긴 배열이고, 두 번째는 평균이다.
배열의 임의의 두 정수를 골랐을 때, 그 평균이 주어진 평균과 같은 정수 쌍이 존재 하는지 ? boolean 형태로 반환

Time : O(N)
Space : O(1)
*/

function averagePair(arr, targetAvg) {
  if (arr.length === 0) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === targetAvg) {
      return true;
    }
    if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }

    // 모두 if - else if - else 로 한 번에 처리하기
  }
  return false;
}
