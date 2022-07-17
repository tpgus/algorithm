//한 개의 입력
let input = require("fs").readFileSync("dev/stdin").toString().trim();

//공백으로 구분된 한 줄 입력 : 1 2 3일 경우
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
// input = ['1','2','3', ...];

//여러 줄 입력
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
//input = [1,2,3];

//첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
