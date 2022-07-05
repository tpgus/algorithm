/*
전달되는 (중첩된)객체안에 존재하는 모든 string 타입의 값을 배열에 담아 반환하기
*/

const obj = {
  //['foo','bar','baz']
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        test: "foobar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// Solutuin 1 : 순수 재귀 함수
function collectStrings1(obj) {
  let result = [];
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      return result.concat(collectStrings(obj[i]));
    }
    if (typeof obj[i] === "string") {
      result.push(obj[i]);
    }
  }
  return result;
}

//Solution 2 : helper 함수 이용
function collectStrings2(obj) {
  let result = [];
  function helper(obj) {
    for (let i in obj) {
      if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
        helper(obj[i]);
      }
      if (typeof obj[i] === "string") {
        result.push(obj[i]);
      }
    }
  }

  helper(obj);
  return result;
}
console.log(collectStrings2(obj)); //['foo','bar','baz']
