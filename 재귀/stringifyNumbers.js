/*
중첩된 객체에 존재하는 모든 number 타입의 값을 string 타입으로 바꾸기
*/

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = {};

  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      newObj[i] = Object.assign({}, stringifyNumbers(obj[i]));
    } else if (typeof obj[i] === "number") {
      newObj[i] = obj[i].toString();
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
