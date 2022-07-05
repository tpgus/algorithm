/*
문자열이 담긴 배열에서 각 문자열의 첫 글자를 대문자로 변경하는 함수를 재귀적으로 작성하기
*/

function capitalizeFirst1(arr) {
  let result = [];

  function helper(str) {
    if (str.length === 1) {
      return str[0].toUpperCase();
    }
    return helper(str.substring(0, str.length - 1)) + str[str.length - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(helper(arr[i]));
  }
  return result;
}

console.log(capitalizeFirst1(["car", "too", "banana"]));
