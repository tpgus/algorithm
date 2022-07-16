//한 줄 입력 : 1 2 3일 경우
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
// input = ['1','2','3', ...];

//--------------------------------------------------------------------------------------

/*
여러 줄 입력
1
2
3
*/
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//input = [1,2,3];
