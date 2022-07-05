/*문자열이 거꾸로 봐도 같은 문자열인지 판별하는 함수 isPalindrome을 재귀적으로 작성*/

//Solution 1
//내가 생각한 방법 : 일단, 원본을 뒤집은 결과를 구하고 이를 원본과 비교
function isPalindrome1(str) {
  let result = "";

  (function helper(newStr) {
    if (newStr.length === 0) {
      return "";
    }
    result += newStr[newStr.length - 1];
    helper(newStr.slice(0, newStr.length - 1));
  })(str);

  if (result === str) {
    return true;
  }
  return false;
}

// console.log(isPalindrome1("abbdsa"));

//Solution  2

function isPalindrome2(str) {
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  if (str.length <= 1) {
    return true;
  }
  return isPalindrome2(str.substring(1, str.length - 1));
}

console.log(isPalindrome2("daadsadd"));
