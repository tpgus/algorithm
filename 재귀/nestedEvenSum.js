let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
      test: { a: 4, b: { c: 8 } },
    },
  },
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// Solution 1 : helper 함수 이용
function nestedEvenSum1(obj) {
  let evenSum = 0;

  function helper(obj) {
    for (let i in obj) {
      if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
        helper(obj[i]);
      }
      if (obj[i] % 2 === 0) {
        evenSum += obj[i];
      }
    }
  }

  helper(obj);
  return evenSum;
}

//Solution 2: 순수 재귀
function nestedEvenSum2(obj) {
  let evenSum = 0;
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      evenSum += nestedEvenSum2(obj[i]);
    }
    if (obj[i] % 2 === 0) {
      evenSum += obj[i];
    }
  }
  return evenSum;
}

console.log(nestedEvenSum2(obj1)); //18
console.log(nestedEvenSum2(obj2)); //10
