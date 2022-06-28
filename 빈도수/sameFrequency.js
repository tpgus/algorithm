/*
두 개의 입력값을 구성하고 있는 숫자들이 같은 빈도 수를 이루고 있는지 찾기

Time Complexity requirements : O(N)

[Input]
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(...args) {
  // good luck. Add any arguments you deem necessary.
  let num1 = args[0].toString();
  let num2 = args[1].toString();

  let obj1 = {}; // 각 숫자를 키로, 빈도수를 값으로 갖는 객체
  let obj2 = {};
  for (let i of num1) {
    if (!obj1[i]) {
      obj1[i] = 0;
    }
    obj1[i]++;
  }

  for (let i of num2) {
    if (!obj2[i]) {
      obj2[i] = 0;
    }
    obj2[i]++;
  }

  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(2222221, 22221));
