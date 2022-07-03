/*
주어진 배열에서 홀수를 모두 찾아 배열에 담아 반환하는 문제를 재귀적으로 풀어보기 (2가지 방법)
(객체 타입에 의한 차이 이해)
*/

//CASE 1 : Helper 메소드를 이용한 방법 : 결과를 Compile 할 때
//CASE 2 방법 보다 코드는 길지만 조금 더 직관적이다. (일반 함수 형태로 작성하면 더 직관적)
function outter(input) {
  const result = [];

  (function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }

    helper(arr.slice(1));
  })(input);

  return result;
}

console.log(outter([1, 2, 3, 4, 5]));

//CASE 2 : 순수 재귀를 이용한 방법, CASE 1에 비해 코드는 더 짧아진다.
//결과를 담아내기 위해 concat, spread 연산자, slice 등이 자주 사용됨.
//대상이 문자열일 경우 immutable하기에 slice, substring를 이용
//객체일 경우 , Object.assign(), spread 연산자
/*
Object.assign()은 속성의 값을 복사하기 때문에, 깊은 복사를 수행하려면 다른 방법을 사용해야 합니다.
만약 출처 값이 객체에 대한 참조라면 참조 값만 복사합니다.
*/
function pureRecursive(arr) {
  const result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  return result.concat(pureRecursive(arr.slice(1)));
}

console.log(pureRecursive([1, 2, 3, 4, 5]));
