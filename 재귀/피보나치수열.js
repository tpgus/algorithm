/*
피보나치 수열은 첫 항이 어디부터 시작하는지 따져봐야 한다.
0항부터 시작이라면 0 1 1 2 3 5 8 ...이고
1항부터 시작이라면 1 1 2 3 5 8 ... 이고
*/

function fib(n) {
  //1항부터 시작이라면,
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

//메모이제이션 : 1항부터 시작일 때,
//한 번 계산한 값은 다시 계산하지 않는다.(재귀를 다시 돌지 않는다)
function fib(n) {
  let memo = { 1: 1, 2: 1 };

  function helper(n) {
    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = n;
    }
    return helper(n - 1) + helper(n - 2);
  }

  return helper(n);
}

console.log(fib(3));
