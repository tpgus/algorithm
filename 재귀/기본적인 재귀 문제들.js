// 거듭제곱 구하기
function power(base, exp) {
  if (exp < 1) {
    return 1;
  }
  exp--;
  return base * power(base, exp);
}

// console.log(power(2, 0)); // 1
// console.log(power(3, 2)); // 9
// console.log(power(2, 2)); // 4

//factorial 구하기
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(4)); // 24
// console.log(factorial(5)); //120
// console.log(factorial(0)); // 1
// console.log(factorial(2)); //2

//숫자들의 곱
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); //6
// console.log(productOfArray([1, 2, 3, 10])); //60;

//숫자까지의 합
function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); //21
// console.log(recursiveRange(10)); //55;

//피보나치 수열에서 n번째 항의 값 구하기 (이 예제에서는 첫 번째 항이 1, 두 번째 항이 1)
//보통 피보나치 수열은 n 항을 구하는 문제이다, 원래대로라면 첫 항이 0, 둘 째항이 1이기 때문에 조건문도 <=1이라면 n 을 반환해주지만,
//이 문제는 첫 항이 1, 두 번째 항이 1이므로, 조건문도 <=2로 바뀐다.
function fibb(n) {
  if (n <= 2) {
    return 1;
  }

  return fibb(n - 1) + fibb(n - 2);
}

console.log(fibb(4));
console.log(fibb(10));
console.log(fibb(28));
