//Solution 1 : helper 함수 , 그런데 재귀적인 방법이 아님.
function capitalizeWords1(arr) {
  let result = [];

  function helper(str) {
    result.push(str.toUpperCase());
  }

  for (let i of arr) {
    helper(i);
  }
  return result;
}

//Solution 2 :  순수 재귀
function capitalizeWords2(arr) {
  let result = [];

  if (arr.length === 0) {
    return [];
  }

  result.push(arr[0].toUpperCase());

  return result.concat(capitalizeWords2(arr.slice(1)));
}

console.log(capitalizeWords2(["test", "abc"]));
