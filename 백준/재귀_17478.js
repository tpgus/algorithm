let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");

input = Number(input);
//테스트
//input을 정수로 설정하고 실행하기
const decoStr = "____";
const question = `"재귀함수가 뭔가요?"`;
const answerStr = [
  `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
  "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.",
  `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
];

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
function answer(n) {
  console.log(decoStr.repeat(input - n) + question);
  if (n === 0) {
    console.log(
      decoStr.repeat(input - n) + `"재귀함수는 자기 자신을 호출하는 함수라네"`
    );
    console.log(decoStr.repeat(input - n) + "라고 답변하였지.");
    return;
  }
  for (let i = 0; i < answerStr.length; i++) {
    console.log(decoStr.repeat(input - n) + answerStr[i]);
  }
  answer(n - 1);
  console.log(decoStr.repeat(input - n) + "라고 답변하였지.");
}

answer(input);
