/*
좌표평면 상의 다양한 점들을 입력받아 가장 가까운 두 점 사이의 거리를 리턴해야 합니다.

[입력]
인자 1: points
배열을 요소로 갖는 배열
points.length는 40,000 이하
points[i]는 number 타입을 요소로 갖는 배열
points[i].length는 2
points[i]의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
points[i][j]는 0 이상 10,000 이하의 정수

[출력]
number 타입을 리턴해야 합니다.

[주의사항]
points는 y좌표나 x좌표 등으로 정렬되어 있지 않습니다.
두 점 사이의 거리를 계산하는 함수 calculateDistance가 주어집니다.
두 점 간 거리는 반드시 이 함수를 이용해서 계산해야 합니다.
함수 calculateDistance는 소수점 계산을 피하기 위해 두 점 사이의 거리에 100을 곱한 후 반올림하여 정수 부분만 취합니다.
최단 거리도 이 기준으로 판단합니다.

[예시]
let points = [
  [0, 0],
  [1, 3],
  [2, 2],
];
let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
*/

// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

/*
[접근 방식]
주어진 좌표들을 가지고 2가지를 선택해서 얻을 수 있는 조합을 이용해 모든 경우를 구한다.
*/
const closestPairOfPoints = function (points) {

  let result = [];
  const combination = (arr, basket, n) => {
    if (n === 0) {
      result.push(basket);
      return;
    }

    arr.forEach((curr, idx, origin) => {
      combination(origin.slice(idx + 1), [...basket,curr], n - 1);
    })
  }
  combination(points, [], 2);
  console.log(result);
  result = result.map(item => {
    return calculateDistance(item[0],item[1]);
  })
  result =Math.min(...result);
  return Math.floor(result*100);
};
const points = [
  [0, 2],
  [6, 67],
  [42, 81],
  [39, 101],
  [189, 140],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])