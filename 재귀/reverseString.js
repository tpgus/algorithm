/*
문자열을 뒤집어서 반환하는 재귀 함수
*/
function reverseString(str) {
  //기존에 str.length === 0 이면 "" 빈 문자열을 반환하는 코드였는데, 이 코드도 맞지만
  //굳이 따지고 보면 이 코드가 더 낫지 않나 싶다.
  if (str.length <= 1) {
    return str;
  }

  let letter = str[str.length - 1];
  return letter + reverseString(str.substring(0, str.length - 1));
}

console.log(reverseString("abc"));
console.log(reverseString("awesome"));
