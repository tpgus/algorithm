//[배열에 담긴 모든 문자열들의 첫 문자를 대문자로 바꾸기]

//바깥쪽 함수는 단지, 문자열들이 담긴 배열을 반복하고, 결과를 담아 반환하는 용도
//문자열의 첫 글자를 대문자로 바꾸어주는 작업만을 담당하는 helper 함수를 작성.
//문자열은 원시타입인 점 생각하기.
//문자열이 아닌 객체 타입도 아래처럼 결과를 모으는 패턴은 비슷
/*
  let newStr = "";

    if (str.length === 1) {
      return str.toUpperCase();
    }

    newStr = helper(str.slice(0, str.length - 1)) + str[str.length - 1];
    return newStr;
*/

function capitalizeFirst(arr) {
  let result = [];

  function helper(str) {
    let newStr = "";

    if (str.length === 1) {
      return str.toUpperCase();
    }

    newStr = helper(str.slice(0, str.length - 1)) + str[str.length - 1];
    return newStr;
  }

  for (let i of arr) {
    result.push(helper(i));
  }

  return result;
}

console.log(capitalizeFirst(["abc", "def", "gh"]));

//순수 재귀 함수로 푼 것,
//helper 함수를 작성한 것이 더 직관적이다.
//여기서는 그냥 베이스 케이스와, 결과를 모으기 위한 코드, 반환하는 코드에 집중해서 보기
function capitalizeFirst(arr) {
  let result = [];

  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }

  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return result.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["abc", "def"]));
